const path = require('path')
const { webpack } = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions:['.js', '.jsx'] //entry에서 파일 확장자명 안적어도 확장자 찾아다니면서 웹팩 수행
    },
    entry: {
        app: ['./client.jsx']
    }, // 입력
    module: {
        rules:[{
            test: /\.(jsx|js)?$/,
            loader: 'babel-loader',
            options:{
                presets: [
                    ['@babel/preset-env', {
                        targets:{
                            browsers:['> 1% in KR']
                        },
                        debug: true
                    }],
                    '@babel/preset-react'
                ],
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                ],
            }
        }]
    },
    plugins:[
        new RefreshWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        
    }, // 출력
    devServer : {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    }
}