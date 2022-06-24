

using API;
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
        public async Task<IActionResult> Upload([FromForm] DocumentDTO document)
        {
            if(document.MyFile != null)
            {
                await _fileManagerLogic.Upload(document);
                
            }
          
            return Ok("Document uploaded successfully");
        }

        [HttpGet]
        [Route("get")]
        public async Task<ActionResult<List<Document>>> GetFiles(int userid)
        {
             var docs = await _fileManagerLogic.Get(userid);
            return Ok(docs);
        }
        [HttpGet]
        [Route("get-all")]
        public async Task<ActionResult<List<Document>>> GetAll(int instituteid)
        {
            var docs = await _fileManagerLogic.GetAll(instituteid);
            return Ok(docs);
        }

        [HttpGet]
        [Route("download")]

        public async Task<IActionResult> Download(string fileName)
        {
            var doc = await _fileManagerLogic.Read(fileName);
            return new FileContentResult(doc, "application/octect-stream")
            {
                FileDownloadName = fileName
            };
        }

        [HttpGet]
        [Route("view")]

        public async Task<ActionResult<string>> View(string fileName)
        {
            //var doc = await _fileManagerLogic.Read(fileName);
            //return Ok(doc);
            //return new FileContentResult(doc, "application/pdf");
            //return file;
            byte[] bytes = await _fileManagerLogic.Read(fileName);
            String file = Convert.ToBase64String(bytes);
            return Ok(file);

        }

        [HttpDelete]
        [Route("delete")]

        public async Task<IActionResult> Delete(string fileName)
        {
              await _fileManagerLogic.Delete(fileName);

            return Ok("Document deleted succesfully");
            
        }

        [HttpPost]
        [Route("addDownload")]

        public async Task<IActionResult> AddDownload(DocumentDowloadDTO doc_user)
        {
            await _fileManagerLogic.PostDownload(doc_user);
            return Ok();
        }
    }
}
