const gulp = require('gulp');
const { styles } = require('./gulp/tasks/sass');
const { scripts } = require('./gulp/tasks/scripts');
const { html } = require('./gulp/tasks/html');
const { serve } = require('./gulp/tasks/serve');

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('html', html);
gulp.task('serve', serve);

gulp.task('start', gulp.series('styles', 'scripts', 'html', 'serve'));
