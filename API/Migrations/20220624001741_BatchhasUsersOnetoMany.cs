using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class BatchhasUsersOnetoMany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BatchId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_BatchId",
                table: "Users",
                column: "BatchId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Batches_BatchId",
                table: "Users",
                column: "BatchId",
                principalTable: "Batches",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Batches_BatchId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_BatchId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "BatchId",
                table: "Users");
        }
    }
}
