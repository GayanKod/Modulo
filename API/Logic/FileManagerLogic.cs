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

        public BlobClient GetBlobClient(string fileName)
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient(containerName);
            return blobContainer.GetBlobClient(fileName);
        }

       
        public async Task Upload(FileModel model, Document document)
        {
            var blobClient = GetBlobClient(model.MyFile.FileName);
            
            await blobClient.UploadAsync(model.MyFile.OpenReadStream(),false);

            document.DocumentURL= blobClient.Uri.ToString();
            //document.DocumentType= blobClient.GetType().ToString();
            //document.DocumentName= blobClient.Name;
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

        public async Task<byte[]> Download(string fileName)
        {
            var blobClient = GetBlobClient(fileName);

            var file = await blobClient.DownloadAsync();

            using (MemoryStream stream = new MemoryStream())
            {
                await file.Value.Content.CopyToAsync(stream);
                return stream.ToArray();
            }

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
