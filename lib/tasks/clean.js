
/*
 * gòje
 * https://github.com/leny/goje
 *
 * JS/COFFEE Document - /tasks/clean.js - clean task, emptying folders
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var del, gulp;

gulp = require("gulp");

del = require("del");

module.exports = function(sTaskName, aFolders) {
  return gulp.task(sTaskName, function(fNext) {
    return del(aFolders, fNext);
  });
};
