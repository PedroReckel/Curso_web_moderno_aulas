const gulp = require("gulp");
const { series, parallel } = require("gulp")

function antes1(cb) {
  console.log("Tarefa antes 1");
  return cb();
}


function antes2(cb) {
  console.log("Tarefa antes 2");
  return cb();
}

// Copiando dois arquivo de uma pastaA que existe para uma pastaB que não existe inicialmente e que vai ser criada pelo gulp quando executar a task
function copiar(cb) {
  gulp.src(['pastaA/**/*.txt']) // Atalho para pegar qualquer arquivo que esteja dentro da pastaA e tenha a extenção .txt
    // .pipe() Essa função "pipe()" serve para fazer transformações nos arquivos que eu defini como os arquivos de entrada para o meu workflow
    .pipe(gulp.dest('pastaB'))
  return cb();
}


function fim(cb) {
  console.log("Tarefa fim");
  return cb();
}

module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim
);