using API.Models;

namespace API.Logic
{
    public interface IFileManagerLogic
    {
        Task Upload(FileModel model, Document document);
        Task<IEnumerable<string>> Allblobs();
        Task<byte[]> Download(string fileName);
        Task Delete(string fileName);
       
    }
}
