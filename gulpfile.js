const gulp = require('gulp');
const { foundationCSS, stylesDev, stylesProd } = require('./gulp/tasks/sass');
const { foundationJS, scriptsDev, scriptsProd } = require('./gulp/tasks/scripts');
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

// tasks for foundation (libraries)
gulp.task('foundationCSS', foundationCSS);
gulp.task('foundationJS', foundationJS);

// tasks for create component
gulp.task('component', createComponent);

// build
gulp.task('build', gulp.series('clean', 'foundationCSS', 'foundationJS', 'stylesProd', 'scriptsProd', 'html', 'images', 'fonts'));

// start
gulp.task('start', gulp.series('clean', 'foundationCSS', 'foundationJS', 'styles', 'scripts', 'images', 'html', 'fonts', gulp.parallel('watch', 'serve')));
