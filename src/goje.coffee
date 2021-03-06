###
 * gòje
 * https://github.com/leny/goje
 *
 * JS/COFFEE Document - /goje.js - module entry point
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

# Clean : generate a clean task
exports.clean = require "./tasks/clean.js"

# Coffee : lint, compile and minify
exports.coffee = require "./tasks/coffee.js"

# Stylus : compile and minify
exports.stylus = require "./tasks/stylus.js"

# Task : expose gulp task method, with sequence boolean
exports.task = require "./tasks/task.js"
