const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tscongig.json') // Arquivo de configuração que o compilador do TS vai usar

// Convertendo TS em JS:

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject()) // Vai ser responsavel por fazer todo o trabalho de compilação
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)