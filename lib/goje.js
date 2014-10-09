
/*
 * gòje
 * https://github.com/leny/goje
 *
 * JS/COFFEE Document - /goje.js - module entry point
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
exports.clean = require("./tasks/clean.js");

exports.coffee = require("./tasks/coffee.js");

exports.stylus = require("./tasks/stylus.js");

exports.task = require("./tasks/task.js");
