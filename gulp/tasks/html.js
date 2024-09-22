const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();

function html() {
    return gulp.src('src/template/pages/*.html')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
}

exports.html = html;
