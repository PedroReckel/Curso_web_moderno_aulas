const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/principal.js', // Arquivo de entrada nessa minha configuração do webpack
    output: {  // Configurando o arquivo e a pasta de saida
        filename: 'principal.js',
        path: __dirname + '/public' // O __dirname aponta para o diretorio raiz daonde o aquivo onde foi chamado está 
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                    'css-loader', // interpreta @import, url()...
                ]
            }
        ]
    }
}