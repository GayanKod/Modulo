using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class InstitutehasDegrees : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InstituteId",
                table: "Degrees",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Degrees_InstituteId",
                table: "Degrees",
                column: "InstituteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Degrees_Institutes_InstituteId",
                table: "Degrees",
                column: "InstituteId",
                principalTable: "Institutes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Degrees_Institutes_InstituteId",
                table: "Degrees");

            migrationBuilder.DropIndex(
                name: "IX_Degrees_InstituteId",
                table: "Degrees");

            migrationBuilder.DropColumn(
                name: "InstituteId",
                table: "Degrees");
        }
    }
}
