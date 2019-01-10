'use strict';

class AppLaunch {
  constructor(app) {
    this.app = app;

    app.sessionStore = {
      async get(key) {
        const data = await app.model.Ini.findOne({ where: { key } });
        if (!data) return null;
        return JSON.parse(data.value);
      },

      async set(key, value, maxAge) {

        if (!maxAge) {
          maxAge = 1 * 3600 * 1000;
        }
        value = JSON.stringify(value);
        await app.model.Ini.createdOrUpdate({ key, value, maxAge });
      },

      async destroy(key) {
        return await app.model.Ini.destroy({ where: { key } });
      },
    };
  }

  // 配置文件即将加载，这是最后动态修改配置的时机
  configWillLoad() {
  }

  // 配置文件加载完成
  configDidLoad() {
  }

  // 文件加载完成
  async didLoad() {
  }

  // 插件启动完毕
  async willReady() {
    await this.app.model.sync({ alert: true });
  }

  // worker 准备就绪
  async didReady() {
  }

  // 应用启动完成
  async serverDidReady() {
  }

  // 应用即将关闭
  async beforeClose() {
  }
}

module.exports = AppLaunch;
