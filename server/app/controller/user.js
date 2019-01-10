'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx } = this;
    const data = await ctx.model.User.create(ctx.request.body);
    ctx.send(data);
  }

  async isLogin() {
    const { ctx } = this;
    ctx.send(ctx.session.user ? true : false);
  }

  async login() {
    const { ctx } = this;
    const userInfo = ctx.request.query;

    const data = await ctx.model.User.findOne({
      where: {
        name: userInfo.name,
        password: userInfo.password
      }
    });

    ctx.session.user = data;
    const msg = data ? '' : '用户或密码错误';
    ctx.send(data, msg);
  }
}

module.exports = UserController;
