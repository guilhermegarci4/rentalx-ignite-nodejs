import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalRepository } from "@modules/rentals/infra/typeorm/repositories/IRentalRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListRentalByUserUseCase {
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalRepository
    ) {}

    async execute(user_id: string): Promise<Rental[]> {
        const rentalsByUser = await this.rentalsRepository.findByUser(user_id);

        return rentalsByUser;
    }
}

export { ListRentalByUserUseCase }