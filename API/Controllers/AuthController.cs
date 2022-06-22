using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;

        public AuthController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterRequest request)
        {
            if (_context.Users.Any(u => u.Email == request.Email))
            {
                return BadRequest("User already exists!");
            }

            CreatePasswordHash(request.Password,
                out byte[] passwordHash,
                out byte[] passwordSalt);

            var user = new User
            {
                Email = request.Email,
                FirstName = request.UserFName, 
                LastName = request.UserLName,
                DOB = request.DOB,
                Gender = request.Gender,
                HomeNo = request.HomeNo,
                Street = request.Street,
                Town = request.Town,
                MobileNumber = request.MobileNumber,
                Role = "Super Admin",
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                VerificationToken = CreateRandomToken()
            };

            var institute = new Institute
            {
                InstituteName = request.InstituteName,
                ContactNumber = request.InstituteContactNo,
            };

            _context.Users.Add(user);
            _context.Institutes.Add(institute);
            await _context.SaveChangesAsync();

            var userInst = new UserInstituteDTO
            {
                UserId =  await _context.Users.Where(a => a.Email == request.Email).Select(x => x.Id).FirstAsync(),
                InstituteId = await _context.Institutes.Where(i => i.ContactNumber == request.InstituteContactNo).Select(x => x.Id).FirstAsync()
            };

            await AddUserInstitute(userInst);
            return Ok("Institute successfully Registered!");
        }

        [HttpPost("AddUserInstitute")]
        public async Task<ActionResult<User>> AddUserInstitute(UserInstituteDTO req)
        {
            var user = await _context.Users
                .Where(a => a.Id == req.UserId)
                .Include(a => a.Institutes)
                .FirstOrDefaultAsync();
            if (user == null)
                return NotFound();
            

            var institute = await _context.Institutes.FindAsync(req.InstituteId);
            if (institute == null)
                return NotFound();


            user.Institutes.Add(institute);
            await _context.SaveChangesAsync();

            return user;
        }



        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest req)
        {

            var user = await _context.Users
                .Where(u => u.Email == req.Email)
                .Include(u => u.Institutes).FirstOrDefaultAsync();



            if (user == null)
            {
                return BadRequest("User not found!");
            }

            if (!VerifyPasswordHash(req.Password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Password is incorrect!");
            }

            if (user.VerifiedAt == null)
            {
                return BadRequest("Not verified!");
            }


            //return Ok($"Welcome Back, {user.Email}! :)");
            string token = CreateJWTToken(user);
            return Ok(new { user = user, token = token });
        }

        private string CreateJWTToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: creds
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }



        [HttpPost("verify")]
        public async Task<IActionResult> Verify(string token)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.VerificationToken == token);
            if (user == null)
            {
                return BadRequest("Invalid Token!");
            }

            user.VerifiedAt = DateTime.Now;
            await _context.SaveChangesAsync();


            return Ok("User Verified");
        }


        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            var admin = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (admin == null)
            {
                return BadRequest("User not found!");
            }

            admin.PasswordResetToken = CreateRandomToken();
            admin.ResetTokenExpires = DateTime.Now.AddMinutes(5);
            await _context.SaveChangesAsync();


            return Ok("You may now reset your password!");
        }


        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword(ResetPWRequest request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.PasswordResetToken == request.Token);
            if (user == null || user.ResetTokenExpires < DateTime.Now)
            {
                return BadRequest("Invalid Token!");
            }

            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.PasswordResetToken = null;
            user.ResetTokenExpires = null;
            await _context.SaveChangesAsync();


            return Ok("You have reset the password successfully!");
        }



        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }


        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }


        private string CreateRandomToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }

        private async Task<ActionResult<List<User>>> GetInstitute(int id)
        {
            var user = await _context.Users
                .Where(u => u.Id == id)
                .Include(u => u.Institutes).ToListAsync();

            return user;
        }

    }
}
