const gulp = require('gulp');
const browserSync = require('../config/browser-sync');
const { styles } = require('./sass');
const { scripts } = require('./scripts');
const { html } = require('./html');

function reload(done) {
    browserSync.reload();
    done();
}

function serve() {
    browserSync.init({
        server: './build'
    });

    gulp.watch('src/style/**/*.scss', gulp.series(() => styles(false), reload));
    gulp.watch('src/template/components/**/*.scss', gulp.series(() => styles(false), reload));
    gulp.watch('src/js/**/*.js', gulp.series(() => scripts(false), reload));
    gulp.watch('src/template/**/*.html', gulp.series(html, reload));
}

exports.serve = serve;
