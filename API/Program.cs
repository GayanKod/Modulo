global using API.Data;
global using Microsoft.EntityFrameworkCore;
global using API.Models.Entities;
global using API.Models.DTOs;
using API.Logic;
using Azure.Storage.Blobs;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// builder.Services.AddDbContext<DataContext>
// (x =>x.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddControllers();

//adding datacontexet
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
//adding blob storage
builder.Services.AddScoped(options =>
{
    return new BlobServiceClient(builder.Configuration.GetConnectionString("AzureConnection"));
});
builder.Services.AddScoped<IFileManagerLogic, FileManagerLogic>();
//Adding CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:3000")
                          .AllowAnyHeader()
                            .AllowAnyMethod()
                               .AllowCredentials();
                      });
});

// var provider = builder.Services.BuildServiceProvider();
// var configuration = provider.GetRequiredService<IConfiguration>(); 

// //Connection to frontend
// builder.Services.AddCors(options => {

//     var clientURL = configuration.GetValue<String>("Client_URL");

//     options.AddDefaultPolicy(builder =>
//     {
//         builder.WithOrigins(clientURL).AllowAnyMethod().AllowAnyHeader();
//     }
//     );
// });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);
// app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
