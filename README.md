# webpack 配置中的问题
	--- Cannot find module 'webpack-cli/bin/config-yargs'
	解决方法：
	1. cnpm install webpack-cli webpack -D
	2. cnpm install webpack-dev-server

	--- webpack提示 [HMR] Hot Module Replacement is disabled
	解决方法：
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		],
	
	--- 使用webpack-dev-server webpack的配置
		---devServer.publicPath(string)
		打包的文件将被部署到该配置对应的path。
		假设server运行在http://localhost:8080而output.filename设置位bundle.js.
		默认情况下publicPath为/,所以最终生成的bundle文件可以通过如下路径访问。
		http://localhost:8080/bundle.js.
		publicPath更改为一个文件夹
		  publicPath: "/assets/"
			最终的生成文件的访问路径为http://localhost:8080/assets/bundle.js.
			publicPath的值，前后必须包含斜杠
			也可以使用完整的url进行制定，如果使用HMR则必须使用该种写法
			publicPath: "http://localhost:8080/assets/"
			最终的生成文件仍然通过http://localhost:8080/assets/bundle.js进行访问。
			建议将devServer.publicPath同output.publicPath配置成相同值

			devServer:{
				historyApiFallback: true,
				contentBase:path.resolve(__dirname,'dist'),
				hot: true,
				port: 8000,
				publicPath:'/'  
			},
			
		Webpack DevServer配置  https://www.jianshu.com/p/c2dd1c195462