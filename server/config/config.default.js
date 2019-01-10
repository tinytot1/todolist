'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546480532165_6322';

  config.session = {
    key: 'EGG_SESS',
    maxAge: 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
    renew: true
  };

  // add your config here
  config.middleware = [ 'report' ];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'todolist',
    username: 'root',
    password: 'Zh@19950920',
    define: {
      freezeTableName: true,
      underscored: true,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci',
      },
      timestamps: true,
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:8080/' ]
  };

  config.onerror = {
    all(err, ctx) {
      ctx.error(err.errors[0]);
    }
  };

  return config;
};
