var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var watch = function() {
  browserSync.init({
    server: './public',
  });
  gulp.watch('app/**/*', ['build']);
  gulp.watch('public/*').on('change', browserSync.reload);
};

var build = function() {
  // set up the browserify instance on a task basis
  var b = browserify('./app/init.js', {
    transform: [
      ['babelify', {
        'presets': ['es2015'],
      }],
      ['jstify'],
    ],
  });

  copy();
  styles();

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
};

var copy = function() {
    return gulp
      .src(['app/assets/index.html', 'app/styles/main.css'])
      .pipe(gulp.dest('public'))
      .pipe(browserSync.stream());
};

var start = function() {
  build();
  watch();
};

var styles = function() {
  return gulp.src('app/styles/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('public/styles'));
};

gulp.task('build', function() {
  return build();
});

gulp.task('start', function() {
  return start();
});
