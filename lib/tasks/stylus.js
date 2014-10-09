
/*
 * gòje
 * https://github.com/leny/goje
 *
 * JS/COFFEE Document - /tasks/stylus.js - stylus task, compile and minify
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var csso, fStylusErrorReporter, gulp, gutil, koutoSwiss, notify, rename, stylus;

gulp = require("gulp");

gutil = require("gulp-util");

stylus = require("gulp-stylus");

koutoSwiss = require("kouto-swiss");

csso = require("gulp-csso");

rename = require("gulp-rename");

notify = require("node-notifier").notify;

fStylusErrorReporter = function(oError) {
  var sFilePath;
  sFilePath = oError.filename.replace("" + (process.cwd()) + "/" + sStyles + "/", "");
  console.log();
  console.log(gutil.colors.underline(sFilePath));
  console.log(gutil.colors.gray("✖ line " + oError.lineno), gutil.colors.red(oError.name));
  console.log("  ", gutil.colors.gray(oError.message));
  return notify({
    title: oError.name,
    subtitle: sFilePath,
    message: "See console for details.",
    sound: "Basso"
  });
};

module.exports = function(sName, sSource, sDest, bCSSO) {
  if (bCSSO == null) {
    bCSSO = true;
  }
  return gulp.task(sName, function() {
    var oStylusCompile;
    oStylusCompile = gulp.src(sSource).pipe(gplumber()).pipe(stylus({
      use: koutoSwiss()
    }).on("error", fStylusErrorReporter)).pipe(gulp.dest(sDest));
    if (bCSSO) {
      return oStylusCompile.pipe(csso()).pipe(rename(function(oPath) {
        oPath.basename += ".min";
      })).pipe(gulp.dest(sDest));
    }
  });
};
