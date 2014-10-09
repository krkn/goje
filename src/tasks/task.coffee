###
 * gòje
 * https://github.com/leny/goje
 *
 * JS/COFFEE Document - /tasks/task.js - expose gulp task method, with sequence boolean
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

gulp = require "gulp"
gsequence = require "run-sequence"

module.exports = ( sName, mActions, bSequence = no ) ->
    return gulp.task sName, mActions if mActions instanceof Function or bSequence is no

    gulp.task sName, ( fNext ) ->
        mActions.push fNext
        gsequence.apply null, mActions
