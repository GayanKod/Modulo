using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class changedFieldsBookingDetailsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_LectureHalls_HallIdId",
                table: "BookingDetails");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "BookingDetails",
                newName: "User");

            migrationBuilder.RenameColumn(
                name: "HallIdId",
                table: "BookingDetails",
                newName: "HallId");

            migrationBuilder.RenameIndex(
                name: "IX_BookingDetails_HallIdId",
                table: "BookingDetails",
                newName: "IX_BookingDetails_HallId");

            migrationBuilder.AddForeignKey(
                name: "FK_BookingDetails_LectureHalls_HallId",
                table: "BookingDetails",
                column: "HallId",
                principalTable: "LectureHalls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_LectureHalls_HallId",
                table: "BookingDetails");

            migrationBuilder.RenameColumn(
                name: "User",
                table: "BookingDetails",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "HallId",
                table: "BookingDetails",
                newName: "HallIdId");

            migrationBuilder.RenameIndex(
                name: "IX_BookingDetails_HallId",
                table: "BookingDetails",
                newName: "IX_BookingDetails_HallIdId");

            migrationBuilder.AddForeignKey(
                name: "FK_BookingDetails_LectureHalls_HallIdId",
                table: "BookingDetails",
                column: "HallIdId",
                principalTable: "LectureHalls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
