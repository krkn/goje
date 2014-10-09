###
 * gòje
 * https://github.com/leny/goje
 *
 * JS/COFFEE Document - /tasks/stylus.js - stylus task, compile and minify
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

gulp = require "gulp"
gutil = require "gulp-util"

stylus = require "gulp-stylus"
koutoSwiss = require "kouto-swiss"
csso = require "gulp-csso"

rename = require "gulp-rename"

notify = require( "node-notifier" ).notify

fStylusErrorReporter = ( oError ) ->
    sFilePath = oError.filename.replace "#{ process.cwd() }/#{ sStyles }/", ""
    console.log()
    console.log gutil.colors.underline sFilePath
    console.log gutil.colors.gray( "✖ line #{ oError.lineno }" ), gutil.colors.red( oError.name )
    console.log "  ", gutil.colors.gray( oError.message )
    notify
        title: oError.name
        subtitle: sFilePath
        message: "See console for details."
        sound: "Basso"

module.exports = ( sName, sSource, sDest, bCSSO = yes ) ->
    gulp.task sName, ->
        oStylusCompile = gulp
            .src sSource
            .pipe gplumber()
            .pipe stylus( use: koutoSwiss() ).on "error", fStylusErrorReporter
            .pipe gulp.dest sDest

        if bCSSO
            oStylusCompile
                .pipe csso()
                .pipe rename ( oPath ) ->
                    oPath.basename += ".min"
                    return
                .pipe gulp.dest sDest
