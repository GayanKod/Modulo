namespace API.Models.Entities
{
    public class Document_User
    {
        public int Id { get; set; }
        public DateTime Date { get; set; } = DateTime.Today;

        public int UserId { get; set; }
        public User User { get; set; }
        

        public int DocumentId { get; set; }

        public Document Document { get; set; }

    }
}
