using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Admin>>> Get()
        {
            var admins = new List<Admin>
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
                    AdminType="SuperAd"
                }
            };
            return Ok(admins);
        }
    }
}
