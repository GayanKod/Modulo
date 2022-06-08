using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class LabBookingRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_Labs_LabId",
                table: "BookingDetails");

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_Labs_LabId",
                table: "BookingDetails");

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
        }
    }
}
