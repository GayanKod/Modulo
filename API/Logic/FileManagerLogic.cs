using API.Models;
using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API.Logic
{
    public class FileManagerLogic : IFileManagerLogic
    {
        private readonly BlobServiceClient _blobServiceClient;
        private readonly DataContext _context;

        public FileManagerLogic(BlobServiceClient blobServiceClient, DataContext context)
        {
                _blobServiceClient = blobServiceClient;
                _context = context;

        }
        String containerName = "upload-file";

        public BlobClient GetBlobClient(string fileName)
        {
           
            var blobContainer = _blobServiceClient.GetBlobContainerClient(containerName);
            return blobContainer.GetBlobClient(fileName);
        }


        public async Task Upload( DocumentDTO document)
        {
            var blobClient = GetBlobClient(document.DocumentName);

            await blobClient.UploadAsync(document.MyFile.OpenReadStream(), false);

            var doc = new Document
            {
                DocumentName = document.DocumentName,
                Description = document.Description,
                DocumentSize = (int)document.MyFile.Length,
                DocumentURL = blobClient.Uri.ToString(),
        };

            _context.Documents.Add(doc);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Document>> Get()
        {
            return await _context.Documents.ToListAsync();
        }

        public async Task<IEnumerable<string>> Allblobs()
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient(containerName);

            var files = new List<string>();

            var blobs = blobContainer.GetBlobsAsync();

            await foreach (var blob in blobs)
            {
                files.Add(blob.Name);
            }
            return files;
        }
     

        public async Task<byte[]> Read(string fileName)
        {
            var blobClient = GetBlobClient(fileName);

            var file = await blobClient.DownloadAsync();

            using (MemoryStream stream = new MemoryStream())
            {
                await file.Value.Content.CopyToAsync(stream);
                return stream.ToArray();
            }

        }
        public async Task<string> View(string fileName)
        {
            var blobClient = GetBlobClient(fileName);
            string url =   blobClient.Uri.AbsoluteUri;
            return url;
        }
        public async Task Delete(string fileName)
        {  
            
            var blobClient = GetBlobClient(fileName);

            await blobClient.DeleteAsync();

            
            var document = await _context.Documents.FirstOrDefaultAsync(doc => doc.DocumentName == fileName);

            if (document != null)
            {
                _context.Documents.Remove(document);
                await _context.SaveChangesAsync();
            }
        }

        public async Task PostDownload(Document_UserDTO doc_user)
        {
            //var newDocUser = new Document_User
            //{
            //    UserId = doc_user.UserId,
            //    DocumentId = doc_user.DocumentId,

            //};
            //_context.Document_Users.Add(newDocUser);
            //await _context.SaveChangesAsync();
        }

        //public async Task<List<Document>> GetDownload(int userId)
        //{
          //  var x = await _context.Document_Users.FirstOrDefaultAsync(doc=> doc.UserId == userId);
         //   if(downloads != null)
         //   {
         //       return downloads;
         //   }
       // }
    }
}
