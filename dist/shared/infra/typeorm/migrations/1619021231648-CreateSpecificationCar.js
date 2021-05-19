"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSpecificationCar1619021231648 = void 0;

var _typeorm = require("typeorm");

class CreateSpecificationCar1619021231648 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "specification_car",
      columns: [{
        name: "car_id",
        type: "uuid"
      }, {
        name: "specification_id",
        type: "uuid"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
    await queryRunner.createForeignKey("specification_car", new _typeorm.TableForeignKey({
      name: "FKSpecificationCar",
      referencedTableName: "specifications",
      referencedColumnNames: ["id"],
      columnNames: ["specification_id"],
      onDelete: "SET NULL",
      onUpdate: "SET NULL"
    }));
    await queryRunner.createForeignKey("specification_car", new _typeorm.TableForeignKey({
      name: "FKCarSpecificationCar",
      referencedTableName: "cars",
      referencedColumnNames: ["id"],
      columnNames: ["car_id"],
      onDelete: "SET NULL",
      onUpdate: "SET NULL"
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropForeignKey("specification_car", "FKSpecificationCar");
    await queryRunner.dropForeignKey("specification_car", "FKCarSpecificationCar");
    await queryRunner.dropTable("specification_car");
  }

}

exports.CreateSpecificationCar1619021231648 = CreateSpecificationCar1619021231648;