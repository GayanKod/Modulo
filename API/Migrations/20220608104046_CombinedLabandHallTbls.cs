using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class CombinedLabandHallTbls : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_Labs_LabId",
                table: "BookingDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_LectureHalls_LectureHallId",
                table: "BookingDetails");

            migrationBuilder.DropTable(
                name: "Labs");

            migrationBuilder.DropTable(
                name: "LectureHalls");

            migrationBuilder.DropIndex(
                name: "IX_BookingDetails_LabId",
                table: "BookingDetails");

            migrationBuilder.DropIndex(
                name: "IX_BookingDetails_LectureHallId",
                table: "BookingDetails");

            migrationBuilder.DropColumn(
                name: "LabId",
                table: "BookingDetails");

            migrationBuilder.DropColumn(
                name: "LectureHallId",
                table: "BookingDetails");

            migrationBuilder.AddColumn<int>(
                name: "ClassRoomId",
                table: "BookingDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ClassRooms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FloorNumber = table.Column<int>(type: "int", nullable: false),
                    BuildingNumber = table.Column<int>(type: "int", nullable: false),
                    capacity = table.Column<int>(type: "int", nullable: false),
                    LabType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdminId = table.Column<int>(type: "int", nullable: false),
                    ClassRoomType = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassRooms", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookingDetails_ClassRoomId",
                table: "BookingDetails",
                column: "ClassRoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_BookingDetails_ClassRooms_ClassRoomId",
                table: "BookingDetails",
                column: "ClassRoomId",
                principalTable: "ClassRooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookingDetails_ClassRooms_ClassRoomId",
                table: "BookingDetails");

            migrationBuilder.DropTable(
                name: "ClassRooms");

            migrationBuilder.DropIndex(
                name: "IX_BookingDetails_ClassRoomId",
                table: "BookingDetails");

            migrationBuilder.DropColumn(
                name: "ClassRoomId",
                table: "BookingDetails");

            migrationBuilder.AddColumn<int>(
                name: "LabId",
                table: "BookingDetails",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LectureHallId",
                table: "BookingDetails",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Labs",
                columns: table => new
                {
                    LabId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdminId = table.Column<int>(type: "int", nullable: false),
                    BuildingNumber = table.Column<int>(type: "int", nullable: false),
                    FloorNumber = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    capacity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Labs", x => x.LabId);
                });

            migrationBuilder.CreateTable(
                name: "LectureHalls",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdminId = table.Column<int>(type: "int", nullable: false),
                    BuildingNumber = table.Column<int>(type: "int", nullable: false),
                    FloorNumber = table.Column<int>(type: "int", nullable: false),
                    capacity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LectureHalls", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookingDetails_LabId",
                table: "BookingDetails",
                column: "LabId");

            migrationBuilder.CreateIndex(
                name: "IX_BookingDetails_LectureHallId",
                table: "BookingDetails",
                column: "LectureHallId");

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
    }
}
