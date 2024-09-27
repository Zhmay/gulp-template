const gulp = require('gulp');
const { stylesDev, stylesProd } = require('./gulp/tasks/sass');
const { scriptsDev, scriptsProd } = require('./gulp/tasks/scripts');
const { html } = require('./gulp/tasks/html');
const { serve } = require('./gulp/tasks/serve');
const { clean } = require('./gulp/tasks/clean');
const { images } = require('./gulp/tasks/images');
const { fonts } = require('./gulp/tasks/fonts');
const { createComponent } = require('./gulp/tasks/component');
const { watchFiles } = require('./gulp/tasks/watch');

// tasks for development
gulp.task('styles', stylesDev);
gulp.task('scripts', scriptsDev);
gulp.task('html', html);
gulp.task('serve', serve);
gulp.task('clean', clean);
gulp.task('images', images); 
gulp.task('fonts', fonts); 
gulp.task('watch', watchFiles);

// tasks for production
gulp.task('stylesProd', stylesProd);
gulp.task('scriptsProd', scriptsProd);

// tasks for create component
gulp.task('component', createComponent);

// build
gulp.task('build', gulp.series('clean', 'stylesProd', 'scriptsProd', 'html', 'images', 'fonts'));

// start
gulp.task('start', gulp.series('clean', 'styles', 'scripts', 'images', 'html', 'fonts', gulp.parallel('watch', 'serve')));
