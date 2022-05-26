using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private static List<Admin> admins = new List<Admin>
        {
                new Admin
                {
                    AdminID = "A001",
                    AdminName ="Gayan",
                    DOB="1999/5/9",
                    Gender ="Male",
                    StreetNo="3/13",
                    Street="Rathu Palliya Rd",
                    Town="Panadura",
                    AdminType="SA"
                },
                new Admin
                {
                    AdminID = "A002",
                    AdminName ="Dinidu",
                    DOB="1999/12/10",
                    Gender ="Male",
                    StreetNo="89",
                    Street="Galle Rd",
                    Town="Colombo",
                    AdminType="SA"
                }
        };

        [HttpGet]
        public async Task<ActionResult<List<Admin>>> GetAdmins()
        {
            return Ok(admins);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(String id)
        {
            var admin = admins.Find(ad => ad.AdminID == id);
            if(admin == null)
                return BadRequest("Admin Not Found!");
            return Ok(admin);
        }

        [HttpPost]
        public async Task<ActionResult<List<Admin>>> AddAdmin(Admin admin)
        {
            admins.Add(admin);
            return Ok(admins);
        }

        [HttpPut]
        public async Task<ActionResult<List<Admin>>> UpdateAdmin(Admin req)
        {
            var admin = admins.Find(ad => ad.AdminID == req.AdminID);
            if (admin == null)
                return BadRequest("Admin Not Found!");
            
            admin.AdminID = req.AdminID;
            admin.AdminName = req.AdminName;
            admin.Gender = req.Gender;
            admin.DOB = req.DOB;
            admin.StreetNo = req.StreetNo;
            admin.Street = req.Street;
            admin.Town = req.Town;
            admin.AdminType = req.AdminType;

            return Ok(admins);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Admin>>> DeleteAdmin(String id)
        {
            var admin = admins.Find(ad => ad.AdminID == id);
            if (admin == null)
                return BadRequest("Admin Not Found!");

            admins.Remove(admin);
            return Ok(admins);
        }

    }
}
