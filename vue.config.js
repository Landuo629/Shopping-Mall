module.exports = {
	publicPath: "./",
    //配置别名
    configureWebpack:{
        resolve:{//解决
            extensions:[],
            alias:{//别名
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }  
        }
    }
}