const gulp = require('gulp')
const babel = require('gulp-babel')
const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')(require('sass'))

function appHTML(cb) {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
}

function appCSS(cb) {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('buid/assets/css'))
}

function appJS(cb) {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({ presets: ['ENV'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG(cb) {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest('build/assets/imgs'))
}

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}