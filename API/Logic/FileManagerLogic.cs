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

       
        public async Task Upload(FileModel model, Document document)
        {
            var blobClient = GetBlobClient(document.DocumentName);
            
            await blobClient.UploadAsync(model.MyFile.OpenReadStream(),false);

            document.DocumentURL= blobClient.Uri.ToString();
            //document.DocumentType= blobClient.GetType().ToString();
            //document.DocumentName= blobClient.Name;
            document.DocumentSize = (int)model.MyFile.Length;
            _context.Documents.Add(document);
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
    }
}
