module.exports = {
    devServer: {
      port: 8080,
      host:"192.168.0.102",
      open:true,
      proxy:{
        '/api':{
          target:'http://api.newbee.ltd/api/v1',
          pathRewrite:{'^/api':''},
          changeOrigin:true,
          secure:false
        }
      }
    }
  }