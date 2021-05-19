"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var DayjsDateprovider_1 = require("./implementations/DayjsDateprovider");
tsyringe_1.container.registerSingleton("DateProvider", DayjsDateprovider_1.DayjsDateProvider);
