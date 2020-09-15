const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module:{
    rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]
   },
   devServer: {
       contentBase: path.join(__dirname,'dist'),
       compress:true,
       port:4000,
       hot:true
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist/index.html')
    })
  ],
    entry: './src/index.js',
    output: {
        filename: 'FormBuilder.js',
        path: path.resolve(__dirname, 'dist')
    }
}