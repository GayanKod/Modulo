using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class changedDocument_Users : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_document_Users_Documents_DocumentId",
                table: "document_Users");

            migrationBuilder.DropForeignKey(
                name: "FK_document_Users_Users_UserId",
                table: "document_Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_document_Users",
                table: "document_Users");

            migrationBuilder.RenameTable(
                name: "document_Users",
                newName: "Document_Users");

            migrationBuilder.RenameIndex(
                name: "IX_document_Users_UserId",
                table: "Document_Users",
                newName: "IX_Document_Users_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_document_Users_DocumentId",
                table: "Document_Users",
                newName: "IX_Document_Users_DocumentId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Document_Users",
                table: "Document_Users",
                column: "Id");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Document_Users_Documents_DocumentId",
                table: "Document_Users");

            migrationBuilder.DropForeignKey(
                name: "FK_Document_Users_Users_UserId",
                table: "Document_Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Document_Users",
                table: "Document_Users");

            migrationBuilder.RenameTable(
                name: "Document_Users",
                newName: "document_Users");

            migrationBuilder.RenameIndex(
                name: "IX_Document_Users_UserId",
                table: "document_Users",
                newName: "IX_document_Users_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Document_Users_DocumentId",
                table: "document_Users",
                newName: "IX_document_Users_DocumentId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_document_Users",
                table: "document_Users",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_document_Users_Documents_DocumentId",
                table: "document_Users",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "DocumentId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_document_Users_Users_UserId",
                table: "document_Users",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
