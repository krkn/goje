
/*
 * gòje
 * https://github.com/leny/goje
 *
 * JS/COFFEE Document - /tasks/task.js - expose gulp task method, with sequence boolean
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var gsequence, gulp;

gulp = require("gulp");

gsequence = require("run-sequence");

module.exports = function(sName, mActions, bSequence) {
  if (bSequence == null) {
    bSequence = false;
  }
  if (mActions instanceof Function || bSequence === false) {
    return gulp.task(sName, mActions);
  }
  return gulp.task(sName, function(fNext) {
    mActions.push(fNext);
    return gsequence.apply(null, mActions);
  });
};
