"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ListAvailableCarsUseCase", {
  enumerable: true,
  get: function () {
    return _ListAvailableCarsUseCase.ListAvailableCarsUseCase;
  }
});

var _CarsRepositoryInMemory = require("@modules/cars/repositories/in-memory/CarsRepositoryInMemory");

var _ListAvailableCarsUseCase = require("./ListAvailableCarsUseCase");

let listCarsUseCase;
let carsRepositoryInMemory;
describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    listCarsUseCase = new _ListAvailableCarsUseCase.ListAvailableCarsUseCase(carsRepositoryInMemory);
  });
  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEFF-1214",
      fine_amount: 40,
      brand: "Audi",
      category_id: "category_id"
    });
    const cars = await listCarsUseCase.execute({
      brand: "Car_brand_test"
    });
    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DEF-1214",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id"
    });
    const cars = await listCarsUseCase.execute({
      brand: "Car_brand_test"
    });
    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DES-1214",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id"
    });
    const cars = await listCarsUseCase.execute({
      name: "Car2"
    });
    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 110.00,
      license_plate: "DES-1214",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "12345"
    });
    const cars = await listCarsUseCase.execute({
      category_id: "12345"
    });
    expect(cars).toEqual([car]);
  });
});