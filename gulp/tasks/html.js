const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

function html() {
    return gulp.src('src/pages/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
}

exports.html = html;
