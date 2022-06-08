using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class EditResourceTable2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Resources_ClassRooms_ClassRoomId",
                table: "Resources");

            migrationBuilder.DropIndex(
                name: "IX_Resources_ClassRoomId",
                table: "Resources");

            migrationBuilder.DropColumn(
                name: "ClassRoomId",
                table: "Resources");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ClassRoomId",
                table: "Resources",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Resources_ClassRoomId",
                table: "Resources",
                column: "ClassRoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_Resources_ClassRooms_ClassRoomId",
                table: "Resources",
                column: "ClassRoomId",
                principalTable: "ClassRooms",
                principalColumn: "Id");
        }
    }
}
