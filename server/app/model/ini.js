module.exports = app => {
  const { STRING } = app.Sequelize;

  const Ini = app.model.define('ini', {
    key: STRING(256),
    value: STRING(2048),
    maxAge: STRING(1024)
  });

  Ini.createdOrUpdate = async function (userInfo) {
    const one = await this.findOne({
      where: {
        key: userInfo.key
      }
    });
    if (one) { return await one.update(userInfo); }
    return await this.create(userInfo);
  };

  return Ini;
};
