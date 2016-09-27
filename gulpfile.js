var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
  gulp.start('sass');
  gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app'));
});
