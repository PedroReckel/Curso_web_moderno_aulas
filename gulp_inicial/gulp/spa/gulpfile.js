const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulp_tasks/app')
const { depsCSS, depsFonts } = require('./gulp_tasks/deps')
const { monitorarArquivos, servidor } = require('./gulp_tasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)