let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

gulp.task('min', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build'));
});
