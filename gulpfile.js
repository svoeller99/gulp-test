var gulp = require('gulp');

gulp.task('default', ['monkey','asdf'], function(){
  gulp.src('src/stuff/**/*.txt', {base:'src'})
    .pipe(gulp.dest('dest'));
});

gulp.task('monkey', function() {
  console.log("Hello there!");
});

gulp.task('asdf', function(){
  console.log("another one");
});