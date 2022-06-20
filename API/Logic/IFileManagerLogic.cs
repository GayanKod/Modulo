using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Logic
{
    public interface IFileManagerLogic
    {
        Task Upload(FileModel model, Document document);
        Task<List<Document>> Get();
        Task<IEnumerable<string>> Allblobs();
        Task<byte[]> Read(string fileName);
        Task<string> View(string fileName);
        Task Delete(string fileName);
       
    }
}
