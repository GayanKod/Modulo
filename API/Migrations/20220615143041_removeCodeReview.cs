using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class removeCodeReview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClassRoomName",
                table: "ClassRooms");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ClassRoomName",
                table: "ClassRooms",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
