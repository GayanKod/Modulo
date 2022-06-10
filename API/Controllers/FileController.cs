
using API.Logic;
using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AzureBlobTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly IFileManagerLogic _fileManagerLogic;
        public FileController(IFileManagerLogic fileManagerLogic)
        {
            _fileManagerLogic = fileManagerLogic;   
        }
        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> Upload([FromForm]FileModel model)
        {
            if(model.MyFile != null)
            {
                await _fileManagerLogic.Upload(model);
            }
            return Ok();
        }

        [HttpGet]
        [Route("get-all")]
        public async Task<IEnumerable<string>> Allblobs()
        {
            return await _fileManagerLogic.Allblobs();
        }
    }
}
