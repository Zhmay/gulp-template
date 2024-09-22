const gulp = require('gulp');
const { styles } = require('./gulp/tasks/sass');
const { scripts } = require('./gulp/tasks/scripts');
const { html } = require('./gulp/tasks/html');
const { serve } = require('./gulp/tasks/serve');
const { clean } = require('./gulp/tasks/clean');

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('html', html);
gulp.task('serve', serve);
gulp.task('clean', clean);

gulp.task('start', gulp.series('clean', 'styles', 'scripts', 'html', 'serve'));
