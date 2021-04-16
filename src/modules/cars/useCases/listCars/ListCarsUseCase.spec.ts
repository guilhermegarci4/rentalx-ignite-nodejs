import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    })

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Car description", 
            daily_rate: 110.00, 
            license_plate: "DEFF-1214", 
            fine_amount: 40, 
            brand: "Audi", 
            category_id: "category_id",
        });

        const cars = await listCarsUseCase.execute({});
        
        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "Car description", 
            daily_rate: 110.00, 
            license_plate: "DEF-1214", 
            fine_amount: 40 , 
            brand: "Car_brand_test", 
            category_id: "category_id"
        });

        const cars = await listCarsUseCase.execute({
            brand: "Car_brand";
        });
        
        expect(cars).toEqual([car]);
    });
});

export { ListCarsUseCase }