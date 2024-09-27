const gulp = require('gulp');
const fs = require('fs-extra');

async function images() {
    const srcDir = 'src/img/';
    const destDir = 'build/img/';

    try {
        await fs.copy(srcDir, destDir);
    } catch (err) {
        console.error('Error copying images:', err);
    }
}

exports.images = images;
