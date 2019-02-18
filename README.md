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

	--- git 上传忽略 node_modules
	1、在需要创建 .gitignore 文件的文件夹, 右键选择Git Bash 进入命令行，进入项目所在目录。

	2、输入 touch .gitignore ，生成“.gitignore”文件。

	3、在”.gitignore” 文件里输入你要忽略的文件夹及其文件就可以了。（注意格式）

	我的.gitignore

	.DS_Store
 
	node_modules/
	
	dist/
	
	npm-debug.log

	4、下面我们看看常用的规则：
		1）/mtk/               过滤整个文件夹
		2）*.zip                过滤所有.zip文件
		3）/mtk/do.c         过滤某个具体文件
	
	node_modules/ 表示过滤这个文件夹
 
	*.zip 过滤zip后缀文件
	
	demo.html 过滤该文件
	
	!src/ 不过滤该文件夹
	
	!*.js 不过滤java源文件
	
	!index.html 不过滤该文件

	1）配置语法：
		以斜杠“/”开头表示目录；
		以星号“*”通配多个字符；
		以问号“?”通配单个字符
		以方括号“[]”包含单个字符的匹配列表；
		以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；

		此外，git 对于 .ignore 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效；

		2）示例说明
		a）规则：fd1/*
		说明：忽略目录 fd1 下的全部内容；注意，不管是根目录下的 /fd1/ 目录，还是某个子目录 /child/fd1/ 目录，都会被忽略；
		b）规则：/fd1/*
		说明：忽略根目录下的 /fd1/ 目录的全部内容；
		c）规则：
		/*
		!.gitignore
		!/fw/bin/
		!/fw/sf/
		说明：忽略全部内容，但是不忽略 .gitignore 文件、根目录下的 /fw/bin/ 和 /fw/sf/ 目录；

		5、操作方法

		一是常规的windows操作

		根目录下创建gitignore.txt；
		编辑gitignore.txt，写下你的规则，例如加上node_modules/；
		打开命令行窗口，切换到根目录（可以直接在文件夹上面的地址栏输入cmd回车）；
		执行命令ren gitignore.txt .gitignore。
		二是用Git Bash

		根目录下右键选择“Git Bash Here”进入bash命令窗口；
		输入vim .gitignore命令，打开文件（没有文件会自动创建）；
		按i键切换到编辑状态，输入规则，例如node_modules/，然后按Esc键退出编辑，输入:wq保存退出。
		最后需要强调的一点是，如果你不慎在创建.gitignore文件之前就push了项目，那么即使你在.gitignore文件中写入新的过滤规则，这些规则也不会起作用，Git仍然会对所有文件进行版本管理。
		简单来说，出现这种问题的原因就是Git已经开始管理这些文件了，所以你无法再通过过滤规则过滤它们。因此一定要养成在项目开始就创建.gitignore文件的习惯，否则一旦push，处理起来会非常麻烦。

