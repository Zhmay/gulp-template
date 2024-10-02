const gulp = require('gulp');
const fs = require('fs-extra');
const path = require('path');
const { svgSpriteTask } = require('./sprite');

const srcDir = 'src/';
const buildDir = 'build/';

function handleFileChange(event, filepath) {
    if (!filepath || !event) {
        console.error('Invalid file event or path.');
        return;
    }

    const relativePath = path.relative(srcDir, filepath);
    const destPath = path.join(buildDir, relativePath);

    if (event === 'unlink') {
        fs.remove(destPath, err => {
            if (err) console.error(`Error deleting ${destPath}:`, err);
        });
    } else {
        fs.copy(filepath, destPath, err => {
            if (err) console.error(`Error copying ${filepath}:`, err);
        });
    }
}

function watchFiles() {

    gulp.watch(srcDir + '**/*')
        .on('all', (event, filepath) => {
            handleFileChange(event, filepath);
        });

    gulp.watch('src/img/icons/**/*.svg')
        .on('add', svgSpriteTask)
        .on('change', svgSpriteTask)
        .on('unlink', svgSpriteTask);

    gulp.watch('src/template/pages/**/*.html')
        .on('unlink', (filepath) => {
            const relativePath = path.relative('src/template/pages/', filepath);
            const destPath = path.join('build', relativePath);
            fs.remove(destPath, err => {
                if (err) console.error(`Error deleting HTML file ${destPath}:`, err);
            });
        });
}

exports.watchFiles = watchFiles;
