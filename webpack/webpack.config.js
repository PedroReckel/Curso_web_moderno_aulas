const modoDev = process.env.NODE_ENV !== 'production' // Vai setar se a aplicação webpack vai rodar no modo de desenvolvimento ou produção. Se ele começar com o npm start a aplicação vai rodar em modo desenvolvimento e se eu rodar a aplicação com o npm build a aplicação vai rodar no modo produção
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js', // Arquivo de entrada nessa minha configuração do webpack
    output: {  // Configurando o arquivo e a pasta de saida
        filename: 'principal.js',
        path: __dirname + '/public' // O __dirname aponta para o diretorio raiz daonde o aquivo onde foi chamado está 
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "estilo.css"
    })],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({ // Minimizar js
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({}) // // Minimizar CSS
        ]
    },
    module: {
        rules: [{
                test: /\.s?[ac]ss$/,  // Responsável por ler todo arquivo .css
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                    'css-loader', // interpreta @import, url()...
                    'sass-loader',
                ]
            }]
    }
}