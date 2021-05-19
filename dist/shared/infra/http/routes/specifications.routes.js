"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specificationsRoutes = void 0;

var _express = require("express");

var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");

var _CreateSpecificationController = require("@modules/cars/useCases/createSpecificationController.ts/CreateSpecificationController");

var _ensureAdmin = require("../middlewares/ensureAdmin");

const specificationsRoutes = (0, _express.Router)();
exports.specificationsRoutes = specificationsRoutes;
const createSpecificationController = new _CreateSpecificationController.CreateSpecificationController();
specificationsRoutes.post("/", _ensureAuthenticated.ensureAuthenticate, _ensureAdmin.ensureAdmin, createSpecificationController.handle);