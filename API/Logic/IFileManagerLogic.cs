using API.Models;

namespace API.Logic
{
    public interface IFileManagerLogic
    {
        Task Upload(FileModel model);
        Task<IEnumerable<string>> Allblobs();
    }
}
