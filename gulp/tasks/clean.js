const gulp = require('gulp');

async function clean() {
    const del = (await import('del')).deleteSync;
    return del(['build']);
}

exports.clean = clean;
