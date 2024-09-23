const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { stylesDev } = require('./sass'); 
const { scriptsDev } = require('./scripts');
const { html } = require('./html');

function reload(done) {
    browserSync.reload();
    done();
}

function serve() {
    browserSync.init({
        server: './build'
    });

    gulp.watch('src/style/**/*.scss', gulp.series(stylesDev, reload));
    gulp.watch('src/template/components/**/*.scss', gulp.series(stylesDev, reload));
    gulp.watch('src/js/**/*.js', gulp.series(scriptsDev, reload));
    gulp.watch('src/template/**/*.html', gulp.series(html, reload));
}

exports.serve = serve;
