'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    
    // egg 基于 koa

    // koa 给用户相应信息
    // ctx.body = '用户管理';

    console.log(this);
    

    // egg 给用户相应信息
    this.ctx.body = '用户管理';
  }
}

module.exports = AdminController;
