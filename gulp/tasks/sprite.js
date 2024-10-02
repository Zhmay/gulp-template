const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const config = {
    mode: {
        symbol: {
            sprite: "../sprite.svg",
            example: false
        }
    }
};

function svgSpriteTask() {
    return gulp.src('src/img/icons/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('build/img'));
}

exports.svgSpriteTask = svgSpriteTask;
