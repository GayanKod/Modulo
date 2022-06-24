using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class AddedDocumentUserRelationship4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Document_Users_Documents_DocumentId",
                table: "Document_Users");

            migrationBuilder.DropForeignKey(
                name: "FK_Document_Users_Users_UserId",
                table: "Document_Users");

            migrationBuilder.AddForeignKey(
                name: "FK_Document_Users_Documents_DocumentId",
                table: "Document_Users",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "DocumentId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Document_Users_Users_UserId",
                table: "Document_Users",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Document_Users_Documents_DocumentId",
                table: "Document_Users");

            migrationBuilder.DropForeignKey(
                name: "FK_Document_Users_Users_UserId",
                table: "Document_Users");

            migrationBuilder.AddForeignKey(
                name: "FK_Document_Users_Documents_DocumentId",
                table: "Document_Users",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "DocumentId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Document_Users_Users_UserId",
                table: "Document_Users",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
