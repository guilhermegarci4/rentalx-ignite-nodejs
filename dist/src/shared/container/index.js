"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
require("@shared/container/providers");
var CategoriesRepository_1 = require("@modules/cars/infra/typeorm/repositories/CategoriesRepository");
var SpecificationsRepository_1 = require("@modules/cars/infra/typeorm/repositories/SpecificationsRepository");
var UsersRepository_1 = require("@modules/accounts/infra/typeorm/repositories/UsersRepository");
var CarsRepository_1 = require("@modules/cars/infra/typeorm/repositories/CarsRepository");
var CarsImagesRepository_1 = require("@modules/cars/infra/typeorm/repositories/CarsImagesRepository");
var RentalsRepository_1 = require("@modules/rentals/infra/typeorm/repositories/RentalsRepository");
var UsersTokenRepository_1 = require("@modules/accounts/infra/typeorm/repositories/UsersTokenRepository");
// ICategoriesRepository
tsyringe_1.container.registerSingleton("CategoriesRepository", CategoriesRepository_1.CategoriesRepository);
// ISpecificationsRepository
tsyringe_1.container.registerSingleton("SpecificationsRepository", SpecificationsRepository_1.SpecificationsRepository);
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton("CarsRepository", CarsRepository_1.CarsRepository);
tsyringe_1.container.registerSingleton("CarsImagesRepository", CarsImagesRepository_1.CarsImageRepository);
tsyringe_1.container.registerSingleton("RentalsRepository", RentalsRepository_1.RentalsRepository);
tsyringe_1.container.registerSingleton("UsersTokensRepository", UsersTokenRepository_1.UsersTokensRepository);
