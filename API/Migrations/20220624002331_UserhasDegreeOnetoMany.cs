using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class UserhasDegreeOnetoMany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DegreeId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_DegreeId",
                table: "Users",
                column: "DegreeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Degrees_DegreeId",
                table: "Users",
                column: "DegreeId",
                principalTable: "Degrees",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Degrees_DegreeId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_DegreeId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DegreeId",
                table: "Users");
        }
    }
}
