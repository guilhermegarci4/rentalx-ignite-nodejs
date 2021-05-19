"use strict";

var _tsyringe = require("tsyringe");

var _DayjsDateprovider = require("./implementations/DayjsDateprovider");

_tsyringe.container.registerSingleton("DateProvider", _DayjsDateprovider.DayjsDateProvider);