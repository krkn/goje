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

# Stylus : compile and minify
exports.stylus = require "./tasks/stylus.js"

# Task : expose gulp task method, with sequence boolean
exports.task = require "./tasks/task.js"
