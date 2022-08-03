using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class AddDocumentDocDownRelationshipUpdateUserRe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DocumentDownload_Users_UserId",
                table: "DocumentDownload");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "DocumentDownload",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "DocumentId",
                table: "DocumentDownload",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_DocumentDownload_DocumentId",
                table: "DocumentDownload",
                column: "DocumentId");

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentDownload_Documents_DocumentId",
                table: "DocumentDownload",
                column: "DocumentId",
                principalTable: "Documents",
                principalColumn: "DocumentId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentDownload_Users_UserId",
                table: "DocumentDownload",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DocumentDownload_Documents_DocumentId",
                table: "DocumentDownload");

            migrationBuilder.DropForeignKey(
                name: "FK_DocumentDownload_Users_UserId",
                table: "DocumentDownload");

            migrationBuilder.DropIndex(
                name: "IX_DocumentDownload_DocumentId",
                table: "DocumentDownload");

            migrationBuilder.DropColumn(
                name: "DocumentId",
                table: "DocumentDownload");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "DocumentDownload",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_DocumentDownload_Users_UserId",
                table: "DocumentDownload",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
