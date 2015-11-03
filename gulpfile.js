var gulp = require('gulp');

gulp.task('default', function(){
  gulp.src('src/stuff/**/*.txt', {base:'src'})
    .pipe(gulp.dest('dest'));
});