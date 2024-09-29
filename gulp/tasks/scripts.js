const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pluginsJS = require('../plugins/plugins-js');
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();

function foundationJS() {
    return gulp.src(pluginsJS)
        .pipe(concat('foundation.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
}

function scriptsDev() {
    return gulp.src('src/js/**/*.js')
        .pipe(newer('build/js/main.js'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream());
}

function scriptsProd() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build/js'));
}

exports.foundationJS = foundationJS;
exports.scriptsDev = scriptsDev;
exports.scriptsProd = scriptsProd;

