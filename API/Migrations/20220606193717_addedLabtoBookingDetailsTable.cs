using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class addedLabtoBookingDetailsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LabId",
                table: "BookingDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_BookingDetails_LabId",
                table: "BookingDetails",
                column: "LabId");

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

            migrationBuilder.DropIndex(
                name: "IX_BookingDetails_LabId",
                table: "BookingDetails");

            migrationBuilder.DropColumn(
                name: "LabId",
                table: "BookingDetails");
        }
    }
}
