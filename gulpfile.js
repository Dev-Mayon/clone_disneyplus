const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

// Definindo a tarefa 'default' para ser a função 'testeGulp'
exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
