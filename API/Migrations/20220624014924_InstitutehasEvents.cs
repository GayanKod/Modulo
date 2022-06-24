using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class InstitutehasEvents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "InstituteId",
                table: "TimelineEvents",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_TimelineEvents_InstituteId",
                table: "TimelineEvents",
                column: "InstituteId");

            migrationBuilder.AddForeignKey(
                name: "FK_TimelineEvents_Institutes_InstituteId",
                table: "TimelineEvents",
                column: "InstituteId",
                principalTable: "Institutes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TimelineEvents_Institutes_InstituteId",
                table: "TimelineEvents");

            migrationBuilder.DropIndex(
                name: "IX_TimelineEvents_InstituteId",
                table: "TimelineEvents");

            migrationBuilder.DropColumn(
                name: "InstituteId",
                table: "TimelineEvents");
        }
    }
}
