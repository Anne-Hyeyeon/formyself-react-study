const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
  
    devServer: {
        compress: true,
        port: 9999,
      },
    

    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"] 
                    }
                }
            }
        ]
        // ex. 바벨의 경우 트랜스파일러 세팅
    },
    plugins: [
        // ex. 바벨의 경우 마지막에 콘솔로그, 주석을 제거하는 플러그인 설치
        new HtmlWebpackPlugin({
            title: 'webpack & babel setup',
            template: 'index.html',
        })
    ]
}