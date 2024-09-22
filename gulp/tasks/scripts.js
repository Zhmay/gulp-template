const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();

function scripts() {
    return gulp.src('src/js/**/*.js')
        .pipe(newer('build/js/main.js'))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream());
}

exports.scripts = scripts;
