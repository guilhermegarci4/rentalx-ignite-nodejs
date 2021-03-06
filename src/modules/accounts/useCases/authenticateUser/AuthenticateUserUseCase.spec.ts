import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateprovider";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryinMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;

let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
    beforeEach(() => {
      usersRepositoryinMemory = new UsersRepositoryInMemory();
      usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
      dateProvider = new DayjsDateProvider();
      authenticateUserUseCase = new AuthenticateUserUseCase(
        usersRepositoryinMemory,
        usersTokensRepositoryInMemory,
        dateProvider
      );
      createUserUseCase = new CreateUserUseCase(usersRepositoryinMemory);
    });
  

    it("Should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "000123",
            email: "user@teste.com",
            password: "1234",
            name: "User Test"
        };
        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate a nonexistent user", async () => {
       await expect( authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "1234",
            })
        ).rejects.toEqual(new AppError("Email or password incorrect"));
    })

    it("should not be able to authenticate with incorret password", async () => {
        const user: ICreateUserDTO = {
            driver_license: "9999",
            email: "user@user.com",
            password: "1234",
            name: "User Test Error"
        }

        await createUserUseCase.execute(user);

       await expect(authenticateUserUseCase.execute ({
                email: user.email,
                password: "incorretPassword"
            })
        ).rejects.toEqual(new AppError("Email or password incorrect"));
    })
});