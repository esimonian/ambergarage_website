'use strict';
const gulp = require('gulp');
const inject = require('gulp-inject');
const argv = require('yargs').argv;

// 'gulp inject:head' -- injects our style.css file into the head of our HTML
if (argv.prod) {
  gulp.task('inject:head', () =>
    gulp.src('.tmp/src/_includes/head.html')
      .pipe(inject(gulp.src('.tmp/assets/stylesheets/*.css'), {ignorePath: '.tmp', addPrefix: 'ambergarage_website'}))
      .pipe(gulp.dest('.tmp/src/_includes'))
  );

  // 'gulp inject:footer' -- injects our index.js file into the end of our HTML
  gulp.task('inject:footer', () =>
    gulp.src('.tmp/src/_layouts/default.html')
      .pipe(inject(gulp.src('.tmp/assets/javascript/*.js'), {ignorePath: '.tmp', addPrefix: 'ambergarage_website'}))
      .pipe(gulp.dest('.tmp/src/_layouts'))
  );
} else {
  gulp.task('inject:head', () =>
    gulp.src('.tmp/src/_includes/head.html')
      .pipe(inject(gulp.src('.tmp/assets/stylesheets/*.css'), {ignorePath: '.tmp'}))
      .pipe(gulp.dest('.tmp/src/_includes'))
  );

  // 'gulp inject:footer' -- injects our index.js file into the end of our HTML
  gulp.task('inject:footer', () =>
    gulp.src('.tmp/src/_layouts/default.html')
      .pipe(inject(gulp.src('.tmp/assets/javascript/*.js'), {ignorePath: '.tmp'}))
      .pipe(gulp.dest('.tmp/src/_layouts'))
  );
}
