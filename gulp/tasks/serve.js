const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { styles } = require('./sass');
const { scripts } = require('./scripts');
const { html } = require('./html');

function serve() {
    browserSync.init({
        server: './build'
    });

    gulp.watch('src/scss/**/*.scss', gulp.series(styles));
    gulp.watch('src/js/**/*.js', gulp.series(scripts));
    gulp.watch('src/pages/**/*.html', gulp.series(html));
    gulp.watch('build/*.html').on('change', browserSync.reload);
}

exports.serve = serve;
