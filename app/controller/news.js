'use strict';

const Controller = require('egg').Controller;

// egg 是一个 MVC 的框架

/*
MVC框架: 

  view                    视图 模板 页面的展示

  Controller 控制器       负责处理一些业务逻辑的处理（简单业务逻辑处理）

  model 模型( service )   和数据打交道（查询数据库 请求数据）（复杂的业务逻辑 以及数据操作）

  更适合团队开发、业务逻辑清晰、有利于开发和维护

*/

class NewsController extends Controller {
  async index() {
    
    // this.ctx.body = '新闻页面'

    let msg = 'ejs';

    var list = await this.service.news.getNewsList();

    // 注意 await
    await this.ctx.render('news', {
      msg,
      list
    })

    
  }

  async content() {
    // 获取 get 传值

    // koa 中如何获取 get 传值  ctx.query
    var query = this.ctx.query;

    // console.log(query);
    
    this.ctx.body = '新闻详情'
  }

  async list() {

    // koa 获取动态路由传值 ctx.params

    var params = this.ctx.params;
    console.log(params);
    
    this.ctx.body = '新闻列表'
  }
}

module.exports = NewsController;