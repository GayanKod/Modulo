using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class EditResourceTable3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClassRoomResource",
                columns: table => new
                {
                    ClassRoomsId = table.Column<int>(type: "int", nullable: false),
                    ResourcesId = table.Column<int>(type: "int", nullable: false),
                                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassRoomResource", x => new { x.ClassRoomsId, x.ResourcesId });
                    table.ForeignKey(
                        name: "FK_ClassRoomResource_ClassRooms_ClassRoomsId",
                        column: x => x.ClassRoomsId,
                        principalTable: "ClassRooms",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClassRoomResource_Resources_ResourcesId",
                        column: x => x.ResourcesId,
                        principalTable: "Resources",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClassRoomResource_ResourcesId",
                table: "ClassRoomResource",
                column: "ResourcesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClassRoomResource");
        }
    }
}
