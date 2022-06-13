using API.Models;
using Azure.Storage.Blobs;
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
        public async Task Upload(FileModel model, Document document)
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient(containerName);
            var blobClient = blobContainer.GetBlobClient(model.MyFile.FileName);
            
            await blobClient.UploadAsync(model.MyFile.OpenReadStream(),false);

            document.DocumentURL= blobClient.Uri.ToString();
            _context.Documents.Add(document);
            await _context.SaveChangesAsync();
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

        public async Task Delete(string fileName)
        {
           
                       
            var blobContainer = _blobServiceClient.GetBlobContainerClient(containerName);
            var blobClient = blobContainer.GetBlobClient(fileName);

            await blobClient.DeleteIfExistsAsync();

            
        }
    }
}
