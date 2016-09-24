var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
  gulp.start('sass');
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src'));
});
