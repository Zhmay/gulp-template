const gulp = require('gulp');
const fs = require('fs-extra');

async function fonts() {
    const srcDir = 'src/fonts/';
    const destDir = 'build/fonts/';

    try {
        await fs.copy(srcDir, destDir);
    } catch (err) {
        console.error('Error copying fonts:', err);
    }
}

exports.fonts = fonts;
