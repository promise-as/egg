'use strict';

const Controller = require('egg').Controller;

// egg 是一个 MVC 的框架

/*
MVC框架: 

  view                    视图 模板 页面的展示

  Controller 控制器       负责处理一些业务逻辑的处理

  model 模型( service )   和数据打交道（查询数据库 请求数据）

  更适合团队开发、业务逻辑清晰、有利于开发和维护
*/

class HomeController extends Controller {
  async index() {
    
    // 调用服务器里面的方法  注意异步：await
    var list = await this.service.news.getNewsList();

    console.log(list);
    
    await this.ctx.render('home', {
      list: list
    })

  }
}

module.exports = HomeController;
