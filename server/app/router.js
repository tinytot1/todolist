'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 登录
  router.get('/data/isLogin', controller.user.isLogin);
  router.get('/data/login', controller.user.login);
  router.post('/data/register', controller.user.register);
};
