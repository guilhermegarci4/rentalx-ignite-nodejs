import { inject, injectable } from "tsyringe";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject(SpecificationsRepository)
        private specificationsRepository: ISpecificationsRepository) {}

    async execute({name, description}: IRequest): Promise<void> {
        const specificationAlreadyExits = await this.specificationsRepository.findByName(name);

        if(specificationAlreadyExits) {
            throw new Error("Specification already exists!");
        }
        
       await this.specificationsRepository.create({
           name,
           description,
       });
    }
}

export { CreateSpecificationUseCase };