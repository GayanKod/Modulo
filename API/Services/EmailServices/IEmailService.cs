namespace API.Services.EmailServices
{
    public interface IEmailService
    {
        void SendEmail(EmailDTO request);

    }
}
