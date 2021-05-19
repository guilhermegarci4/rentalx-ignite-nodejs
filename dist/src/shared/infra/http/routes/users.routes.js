"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var CreateUserController_1 = require("@modules/accounts/useCases/createUser/CreateUserController");
var UpdateUserAvatarController_1 = require("@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController");
var upload_1 = __importDefault(require("@config/upload"));
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var ProfileUserController_1 = require("@modules/accounts/useCases/profileUser/ProfileUserController");
var usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
var uploadAvatar = multer_1.default(upload_1.default);
var createUserController = new CreateUserController_1.CreateUserController();
var updateUserAvatarController = new UpdateUserAvatarController_1.UpdateUserAvatarController();
var profileUserController = new ProfileUserController_1.ProfileUserController();
usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar", ensureAuthenticated_1.ensureAuthenticate, uploadAvatar.single("avatar"), updateUserAvatarController.handle);
usersRoutes.get("/profile", ensureAuthenticated_1.ensureAuthenticate, profileUserController.handle);
