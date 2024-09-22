const gulp = require('gulp');
const browserSync = require('browser-sync').create();
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

    gulp.watch('src/style/**/*.scss', gulp.series(styles, reload));
    gulp.watch('src/js/**/*.js', gulp.series(scripts, reload));
    gulp.watch('src/template/**/*.html', gulp.series(html, reload));  
}

exports.serve = serve;
