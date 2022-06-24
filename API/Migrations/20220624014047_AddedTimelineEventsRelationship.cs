using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class AddedTimelineEventsRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BatchId",
                table: "TimelineEvents",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DegreeId",
                table: "TimelineEvents",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TimelineEvents_BatchId",
                table: "TimelineEvents",
                column: "BatchId");

            migrationBuilder.CreateIndex(
                name: "IX_TimelineEvents_DegreeId",
                table: "TimelineEvents",
                column: "DegreeId");

            migrationBuilder.AddForeignKey(
                name: "FK_TimelineEvents_Batches_BatchId",
                table: "TimelineEvents",
                column: "BatchId",
                principalTable: "Batches",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_TimelineEvents_Degrees_DegreeId",
                table: "TimelineEvents",
                column: "DegreeId",
                principalTable: "Degrees",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TimelineEvents_Batches_BatchId",
                table: "TimelineEvents");

            migrationBuilder.DropForeignKey(
                name: "FK_TimelineEvents_Degrees_DegreeId",
                table: "TimelineEvents");

            migrationBuilder.DropIndex(
                name: "IX_TimelineEvents_BatchId",
                table: "TimelineEvents");

            migrationBuilder.DropIndex(
                name: "IX_TimelineEvents_DegreeId",
                table: "TimelineEvents");

            migrationBuilder.DropColumn(
                name: "BatchId",
                table: "TimelineEvents");

            migrationBuilder.DropColumn(
                name: "DegreeId",
                table: "TimelineEvents");
        }
    }
}
