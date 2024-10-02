const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const newer = require('gulp-newer');
const replace = require('gulp-replace');
const fs = require('fs');
const path = require('path');

function html() {
    const spritePath = path.join(__dirname, '../../build/img/sprite.svg');
    let spriteVersion = 'v1';

    try {
        const stats = fs.statSync(spritePath);
        spriteVersion = `v${stats.mtimeMs}`;
    } catch (err) {
        console.log('Error fetching sprite version:', err);
    }

    return gulp.src('src/template/pages/*.html')
        // .pipe(newer('build')) // blocked compile to build (for components)
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))

        .pipe(replace(/sprite\.svg/g, `sprite.svg?${spriteVersion}`))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
}

exports.html = html;
