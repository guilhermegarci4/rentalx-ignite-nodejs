"use strict";

var _AppError = require("@shared/errors/AppError");

var _UsersRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersRepositoryInMemory");

var _CreateUserUseCase = require("../createUser/CreateUserUseCase");

var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");

var _UsersTokensRepositoryInMemory = require("@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory");

var _DayjsDateprovider = require("@shared/container/providers/DateProvider/implementations/DayjsDateprovider");

let authenticateUserUseCase;
let usersRepositoryinMemory;
let usersTokensRepositoryInMemory;
let dateProvider;
let createUserUseCase;
describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryinMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new _UsersTokensRepositoryInMemory.UsersTokensRepositoryInMemory();
    dateProvider = new _DayjsDateprovider.DayjsDateProvider();
    authenticateUserUseCase = new _AuthenticateUserUseCase.AuthenticateUserUseCase(usersRepositoryinMemory, usersTokensRepositoryInMemory, dateProvider);
    createUserUseCase = new _CreateUserUseCase.CreateUserUseCase(usersRepositoryinMemory);
  });
  it("Should be able to authenticate an user", async () => {
    const user = {
      driver_license: "000123",
      email: "user@teste.com",
      password: "1234",
      name: "User Test"
    };
    await createUserUseCase.execute(user);
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });
    expect(result).toHaveProperty("token");
  });
  it("should not be able to authenticate a nonexistent user", async () => {
    await expect(authenticateUserUseCase.execute({
      email: "false@email.com",
      password: "1234"
    })).rejects.toEqual(new _AppError.AppError("Email or password incorrect"));
  });
  it("should not be able to authenticate with incorret password", async () => {
    const user = {
      driver_license: "9999",
      email: "user@user.com",
      password: "1234",
      name: "User Test Error"
    };
    await createUserUseCase.execute(user);
    await expect(authenticateUserUseCase.execute({
      email: user.email,
      password: "incorretPassword"
    })).rejects.toEqual(new _AppError.AppError("Email or password incorrect"));
  });
});