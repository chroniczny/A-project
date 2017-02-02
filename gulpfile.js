// var config = require('require-dir')('gulp-config');
// var $ = require('gulp-recipe-loader')(require('gulp'), config);
//
// $.gulp.task('default', ['serve']);


// --- browsersync -- thing ---

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var plugins = require('gulp-load-plugins')(); //++++

// var sass = require("gulp-ruby-sass");

var browserify = require('browserify');
var uglify = require('gulp-uglify');
// var reload      = browserSync.reload;

// Static Server + watching scss/html files
gulp.task('serve', ['sass'
    , 'js-watch'
], function() {

    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    gulp.watch("app/*.scss", ['sass']);
    gulp.watch("app/../*.html").on('change', browserSync.reload);
    gulp.watch("app/../*.js", ['js-watch'], browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/*.scss")
        .pipe(sass({errorLogToConsole: true}))
        .pipe(gulp.dest("app"))
        .pipe(browserSync.stream());
});
//
gulp.task('default', ['serve']);
//


// process JS files and return the stream. // for now do I need a process files?
// gulp.task('js', function () {
//     return gulp.src('app/../*.js')
//         // .pipe(browserify())
//         // .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch',
    // ['js'],
    function (done) {
    browserSync.reload();
    done();
});


////--- may not need that -- its rewritten in 'serve'

// use default task to launch Browsersync and watch JS files
// gulp.task('serve', ['js'], function () {
//
//     // Serve files from the root of this project
//     browserSync.init({
//         server: {
//             baseDir: "./app"
//         }
//     });
//
//     // add browserSync.reload to the tasks array to make
//     // all browsers reload after tasks are complete.
//     gulp.watch("app/*.js", ['js-watch'], browserSync.reload);
// });
//
//