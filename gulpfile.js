const gulp = require('gulp');
const { stylesDev, stylesProd } = require('./gulp/tasks/sass');
const { scriptsDev, scriptsProd } = require('./gulp/tasks/scripts');
const { html } = require('./gulp/tasks/html');
const { serve } = require('./gulp/tasks/serve');
const { clean } = require('./gulp/tasks/clean');

// tasks for development
gulp.task('styles', stylesDev);
gulp.task('scripts', scriptsDev);
gulp.task('html', html);
gulp.task('serve', serve);
gulp.task('clean', clean);

// tasks for production
gulp.task('stylesProd', stylesProd);
gulp.task('scriptsProd', scriptsProd);

// build
gulp.task('build', gulp.series('clean', 'stylesProd', 'scriptsProd', 'html'));

// start
gulp.task('start', gulp.series('clean', 'styles', 'scripts', 'html', 'serve'));
