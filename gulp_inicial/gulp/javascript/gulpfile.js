const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function inicio(cb) {
    console.log('Incio...')
    return cb()
}

// Os arquivos JS finais vão estar todos dentro de um mesmo arquivo minificado, 
function padrao(cb) {
    return gulp.src('src/**/*.js') 
        .pipe(babel({
            comments: false, // Eu não quero que os arquivo de comentarios sejam transferidos para o arquivo final
            presets: ["env"] // Esse preset vai pegar o JavaScript mais novo possivel 
        }))
        .pipe(uglify()) // O uglfy vai minificar meu código
        .pipe(concat('codigo.min.js')) // O concat vai pegar todos os arquivo selecionados que já foram compilados pelo babel da versão mais atual para a versão mais compativel
        .pipe(gulp.dest('build')) // Jogando meu código minificado para essa pasta
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(inicio, padrao, fim)