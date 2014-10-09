###
 * gòje
 * https://github.com/leny/goje
 *
 * JS/COFFEE Document - /tasks/clean.js - clean task, emptying folders
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

gulp = require "gulp"

del = require "del"

module.exports = ( sTaskName, aFolders ) ->
    gulp.task sTaskName, ( fNext ) ->
        del aFolders, fNext
