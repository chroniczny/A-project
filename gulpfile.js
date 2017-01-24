// var config = require('require-dir')('gulp-config');
// var $ = require('gulp-recipe-loader')(require('gulp'), config);
//
// $.gulp.task('default', ['serve']);


// --- browsersync -- thing ---

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')(); //++++

var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var browserify = require('browserify');
var uglify = require('gulp-uglify');


// +++++++++++++++ >
// gulp.task('browserify', function () {
//     var browserified = transform(function (filename) {
//         var b = browserify(filename);
//         return b.bundle();
//     });
//
//     // hello gulp.src() my old friend
//     return gulp.src(['./src/**/*.js'])
//         .pipe(browserified)
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist'));
// });

// +++++++++++++++ <

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/../*.scss", ['sass']);
    gulp.watch("app/../*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers ||| runs by calling it
gulp.task('sass', function () {
    return gulp.src("app/../*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);


// // process JS files and return the stream.
// gulp.task('js', function () {
//     return gulp.src('app/../*js') // ****** ???
//         .pipe(browserify())
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js')); // ******* ???
// });
//
// // create a task that ensures the `js` task is complete before
// // reloading browsers
// gulp.task('js-watch', ['js'], function (done) {
//     browserSync.reload();
//     done();
// });
//
// // use default task to launch Browsersync and watch JS files
// gulp.task('serve', ['js'], function () {
//
//     // Serve files from the root of this project
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//
//     // add browserSync.reload to the tasks array to make
//     // all browsers reload after tasks are complete.
//     gulp.watch("app/../*.js", ['js-watch']); // ++++++ can I 'js' named as app
// });

gulp.task('browser-sync', function () {
    var files = [
        'app/**/*.html',
        'app/**/*.css',
        // 'app/assets/imgs/**/*.png',
        'app/**/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './app'
        }
    });
});