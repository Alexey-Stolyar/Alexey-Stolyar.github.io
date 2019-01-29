var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// INSTALL
// https://gulpjs.org/recipes/
//
// browser-sync <-live server
// sass/scss <-preprocessor
// imagemin
// uglify

// Compile minified to /dist folder

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  console.log('hello')
  done();
}