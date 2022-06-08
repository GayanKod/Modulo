using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class madeLabandHallnullableBookingTbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_Labs_LabId",
                table: "BookingDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_LectureHalls_LectureHallId",
                table: "BookingDetails");

            migrationBuilder.AlterColumn<int>(
                name: "LectureHallId",
                table: "BookingDetails",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "LabId",
                table: "BookingDetails",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_BookingDetails_Labs_LabId",
                table: "BookingDetails",
                column: "LabId",
                principalTable: "Labs",
                principalColumn: "LabId");

            migrationBuilder.AddForeignKey(
                name: "FK_BookingDetails_LectureHalls_LectureHallId",
                table: "BookingDetails",
                column: "LectureHallId",
                principalTable: "LectureHalls",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_Labs_LabId",
                table: "BookingDetails");

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

            migrationBuilder.AlterColumn<int>(
                name: "LabId",
                table: "BookingDetails",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_BookingDetails_Labs_LabId",
                table: "BookingDetails",
                column: "LabId",
                principalTable: "Labs",
                principalColumn: "LabId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookingDetails_LectureHalls_LectureHallId",
                table: "BookingDetails",
                column: "LectureHallId",
                principalTable: "LectureHalls",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
