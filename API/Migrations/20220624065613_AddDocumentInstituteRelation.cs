using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class AddDocumentInstituteRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InstituteId",
                table: "Documents",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Documents_InstituteId",
                table: "Documents",
                column: "InstituteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Documents_Institutes_InstituteId",
                table: "Documents",
                column: "InstituteId",
                principalTable: "Institutes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Documents_Institutes_InstituteId",
                table: "Documents");

            migrationBuilder.DropIndex(
                name: "IX_Documents_InstituteId",
                table: "Documents");

            migrationBuilder.DropColumn(
                name: "InstituteId",
                table: "Documents");
        }
    }
}
