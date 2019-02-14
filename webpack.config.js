const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	mode: 'production',
	devServer:{
		historyApiFallback: true,
		contentBase:path.resolve(__dirname,'dist'),
		hot: true,
		port: 8000,
		publicPath:'/'
	},
	entry: path.join(__dirname, 'src/index.js'),
	output:{
		path: path.join(__dirname, './dist'),
		filename: 'app.js'
	},
	resolve: {
		modules: ['node_modules', './node_modules'],
		extensions: ['.js', '.jsx'],
		unsafeCache: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// options: {
					// 	presets: ['@babel/preset-env']
					// }
				}
			},{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader',
					'postcss-loader',
				]
			},{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			},{
				test: /\.(png|jpg|jpeg|gif)$/i,
				loader: 'url-loader?name=[hash:8].[ext]&limit=8192',
			},{
				test: /\.(mp4|ogg|svg)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html',
			inject: true
		})
	]
}

module.exports = config