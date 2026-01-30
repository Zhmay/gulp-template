const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pluginsJS = require('../plugins/plugins-js');
const newer = require('gulp-newer');
const browserSync = require('../config/browser-sync');
const fs = require('fs');
const path = require('path');

function foundationJS() {
    if (pluginsJS.length === 0) {

        const jsDir = path.join(__dirname, '../../build/js');
        if (!fs.existsSync(jsDir)) {
            fs.mkdirSync(jsDir, { recursive: true });
        }

        const emptyFilePath = path.join(jsDir, 'foundation.js');
        fs.writeFileSync(emptyFilePath, '', 'utf8');
        return Promise.resolve();
    }

    return gulp.src(pluginsJS)
        .pipe(concat('foundation.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
}

function scripts(prod) {
    let pipeline = gulp.src('src/js/**/*.js');

    if (!prod) {
        pipeline = pipeline.pipe(newer('build/js/main.js'));
    }

    pipeline = pipeline
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/js'));

    if (prod) {
        return pipeline
            .pipe(uglify())
            .pipe(concat('main.min.js'))
            .pipe(gulp.dest('build/js'));
    }
    return pipeline.pipe(browserSync.stream());
}

exports.foundationJS = foundationJS;
exports.scripts = scripts;
