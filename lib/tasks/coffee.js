
/*
 * gòje
 * https://github.com/leny/goje
 *
 * JS/COFFEE Document - /tasks/coffee.js - coffee task, lint, compile and minify
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var coffee, coffeelint, fCoffeeErrorReporter, gplumber, gulp, gutil, oCoffeelintOptions;

gulp = require("gulp");

gutil = require("gulp-util");

gplumber = require("gulp-plumber");

coffeelint = require("gulp-coffeelint");

oCoffeelintOptions = {
  arrow_spacing: {
    level: "error"
  },
  camel_case_classes: {
    level: "error"
  },
  colon_assignment_spacing: {
    spacing: {
      left: 0,
      right: 1
    },
    level: "error"
  },
  duplicate_key: {
    level: "error"
  },
  empty_constructor_needs_parens: {
    level: "error"
  },
  indentation: {
    level: "ignore"
  },
  max_line_length: {
    level: "ignore"
  },
  no_backticks: {
    level: "error"
  },
  no_empty_param_list: {
    level: "error"
  },
  no_interpolation_in_single_quotes: {
    level: "error"
  },
  no_stand_alone_at: {
    level: "error"
  },
  no_tabs: {
    level: "error"
  },
  no_throwing_strings: {
    level: "error"
  },
  no_trailing_semicolons: {
    level: "error"
  },
  no_unnecessary_fat_arrows: {
    level: "error"
  },
  space_operators: {
    level: "error"
  }
};

coffee = require("gulp-coffee");

fCoffeeErrorReporter = function(oError) {
  var sFilePath;
  sFilePath = oError.filename.replace("" + (process.cwd()) + "/" + sSrcPath + "/", "");
  console.log();
  console.log(gutil.colors.underline(sFilePath));
  console.log(gutil.colors.gray("✖ line " + oError.location.first_line), gutil.colors.red(oError.name), gutil.colors.gray(oError.message));
  console.log();
  return notify({
    title: oError.name,
    subtitle: sFilePath,
    message: oError.message,
    sound: "Basso"
  });
};

module.exports = function(sName, sSource, sDest, bBare, bChanged) {
  if (bBare == null) {
    bBare = true;
  }
  if (bChanged == null) {
    bChanged = true;
  }
  return gulp.task(sName, function() {
    var oCoffeeCompile;
    oCoffeeCompile = gulp.src(sSource);
    if (bChanged) {
      oCoffeeCompile.pipe(changed(sDest));
    }
    return oCoffeeCompile.pipe(coffeelint(oCoffeelintOptions)).pipe(coffeelint.reporter()).pipe(coffee({
      bare: bBare
    }).on("error", fCoffeeErrorReporter)).pipe(gulp.dest(sDest));
  });
};
