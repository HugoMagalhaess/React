/*Arquivo de configuracao  
que  vai ser executado pelo node*/ 

//referencia para o webpack
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//
module.exports = {

    //Ponto de entrada. Arquivo onde as depenencias serao carregadas
    entry:  './ex.2/index.js',
    //arquivo de saida
    output:{
        path: __dirname + '/public', // __dirname eh uma variavel de ambiente que  o node disponibiliza
        filename: 'bundle.js' //comumente  usado como terminologia na documentacao
    },
    //Servidor Web
    devServer:{//
        port:8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')

    ],
    module: {
        loaders:[{ //Carrega os  arquivos 
            test: /.js?$/, // Tipo de  arquivo que  ira  carregar, neste  caso JS
            loader: 'babel-loader', // loader  do babel 
            exclude: /node_modules/, //evita  que  o loader carregue esse js
            query:{ //O que  o laoder  vai interpretar
                    presets: ['es2015', 'react'], 
                    plugins: ['transform-object-rest-spread'] 
            }
        },{
            test: /\.css$/,
            loader:  ExtractTextPlugin.extract("style-loader", 'css-loader')
        }]
    }

}