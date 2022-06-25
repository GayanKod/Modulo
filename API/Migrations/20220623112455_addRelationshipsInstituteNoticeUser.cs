using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class addRelationshipsInstituteNoticeUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Notices",
                table: "Notices");

            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "Notices",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "NoticeID",
                table: "Notices",
                newName: "InstituteId");

            migrationBuilder.AlterColumn<int>(
                name: "InstituteId",
                table: "Notices",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Notices",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Notices",
                table: "Notices",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Notices_InstituteId",
                table: "Notices",
                column: "InstituteId");

            migrationBuilder.CreateIndex(
                name: "IX_Notices_UserId",
                table: "Notices",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Notices_Institutes_InstituteId",
                table: "Notices",
                column: "InstituteId",
                principalTable: "Institutes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notices_Users_UserId",
                table: "Notices",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Notices_Institutes_InstituteId",
                table: "Notices");

            migrationBuilder.DropForeignKey(
                name: "FK_Notices_Users_UserId",
                table: "Notices");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Notices",
                table: "Notices");

            migrationBuilder.DropIndex(
                name: "IX_Notices_InstituteId",
                table: "Notices");

            migrationBuilder.DropIndex(
                name: "IX_Notices_UserId",
                table: "Notices");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Notices");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Notices",
                newName: "UserID");

            migrationBuilder.RenameColumn(
                name: "InstituteId",
                table: "Notices",
                newName: "NoticeID");

            migrationBuilder.AlterColumn<int>(
                name: "NoticeID",
                table: "Notices",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Notices",
                table: "Notices",
                column: "NoticeID");
        }
    }
}
