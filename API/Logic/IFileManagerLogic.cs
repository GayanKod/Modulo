using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Logic
{
    public interface IFileManagerLogic
    {
        Task Upload(DocumentDTO document);
        Task<List<Document>> Get(int userid);
        Task<List<Document>> GetAll(int instituteid);
        Task<IEnumerable<string>> Allblobs();
        Task<byte[]> Read(string fileName);
        Task<string> View(string fileName);
        Task Delete(string fileName);
        Task PostDownload(DocumentDowloadDTO doc_user);
        Task<List<DocumentDownload>> getdownload(int userid);
    }
}
