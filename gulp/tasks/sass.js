const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();

function stylesDev() {
    return gulp.src('src/style/style.scss')
        // .pipe(newer('build/css/style.css')) // blocked compile to build
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
}

function stylesProd() {
    return gulp.src('src/style/style.scss')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'));
}

exports.stylesDev = stylesDev;
exports.stylesProd = stylesProd;
