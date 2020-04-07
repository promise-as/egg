'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    
    // 主要获取新闻数据

    let list = ['111', '222', '333']

    return list;
  }
}

module.exports = NewsService;
