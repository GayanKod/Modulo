using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class UpdateDegreeBatch : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BatchDegree");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BatchDegree",
                columns: table => new
                {
                    BatchesId = table.Column<int>(type: "int", nullable: false),
                    DegreesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BatchDegree", x => new { x.BatchesId, x.DegreesId });
                    table.ForeignKey(
                        name: "FK_BatchDegree_Batches_BatchesId",
                        column: x => x.BatchesId,
                        principalTable: "Batches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BatchDegree_Degrees_DegreesId",
                        column: x => x.DegreesId,
                        principalTable: "Degrees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BatchDegree_DegreesId",
                table: "BatchDegree",
                column: "DegreesId");
        }
    }
}
