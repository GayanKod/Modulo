using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class InstitutehasBatches : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InstituteId",
                table: "Batches",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Batches_InstituteId",
                table: "Batches",
                column: "InstituteId");

            migrationBuilder.AddForeignKey(
                name: "FK_Batches_Institutes_InstituteId",
                table: "Batches",
                column: "InstituteId",
                principalTable: "Institutes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Batches_Institutes_InstituteId",
                table: "Batches");

            migrationBuilder.DropIndex(
                name: "IX_Batches_InstituteId",
                table: "Batches");

            migrationBuilder.DropColumn(
                name: "InstituteId",
                table: "Batches");
        }
    }
}
