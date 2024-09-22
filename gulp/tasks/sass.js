const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat');
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();

function styles() {
    return gulp.src('src/style/style.scss')
        .pipe(newer('build/css/style.css'))
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
}

exports.styles = styles;
