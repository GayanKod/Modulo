using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class removedLabfromBookingTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_LectureHalls_LectureHallId",
                table: "BookingDetails");

            migrationBuilder.AlterColumn<int>(
                name: "LectureHallId",
                table: "BookingDetails",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "HallId",
                table: "BookingDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_BookingDetails_LectureHalls_LectureHallId",
                table: "BookingDetails",
                column: "LectureHallId",
                principalTable: "LectureHalls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_LectureHalls_LectureHallId",
                table: "BookingDetails");

            migrationBuilder.DropColumn(
                name: "HallId",
                table: "BookingDetails");

            migrationBuilder.AlterColumn<int>(
                name: "LectureHallId",
                table: "BookingDetails",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_BookingDetails_LectureHalls_LectureHallId",
                table: "BookingDetails",
                column: "LectureHallId",
                principalTable: "LectureHalls",
                principalColumn: "Id");
        }
    }
}
