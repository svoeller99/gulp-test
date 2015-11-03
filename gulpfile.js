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

gulp.task('one', function(cb){
  console.log('one');
  cb(); // NOTE: without this, 'two' won't fire!!
})

gulp.task('two', ['one'], function() {
  console.log('two');
});

gulp.task('err', ['one'],function(cb){
  cb("oops!");
});

gulp.task('foo',['one','two']);