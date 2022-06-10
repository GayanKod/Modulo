using API.Models;
using Azure.Storage.Blobs;
using System.Collections.Generic;

namespace API.Logic
{
    public class FileManagerLogic : IFileManagerLogic
    {
        private readonly BlobServiceClient _blobServiceClient;
        public FileManagerLogic(BlobServiceClient blobServiceClient)
        {
                _blobServiceClient = blobServiceClient;
        }

        String containerName = "upload-file";
        public async Task Upload(FileModel model)
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient(containerName);
            var blobClient = blobContainer.GetBlobClient(model.MyFile.FileName);
            
            await blobClient.UploadAsync(model.MyFile.OpenReadStream(),false);
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
    }
}
