using API.Models;

namespace API.Logic
{
    public interface IFileManagerLogic
    {
        Task Upload(FileModel model, Document document);
        Task<IEnumerable<string>> Allblobs();
        Task Delete(string fileName);
       
    }
}
