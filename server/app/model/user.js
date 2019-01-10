module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    // 名字
    name: {
      type: STRING(32),
      allowNull: false,
      unique: true
    },
    // 密码
    password: {
      type: STRING(32),
      validate: {
        isPassword(value) {
          // 定义规则
          const regx = /(?!^[0-9]{6,16}$)(?!^[a-z]{6,16}$)(?!^[A-Z]{6,16}$)^[0-9a-zA-Z]{6,16}$/;
          if (!regx.test(value)) {
            throw new Error('密码长度 6-16 位，由数字、小写字符和大写字母组成，但必须至少包括 2 种字符');
          }
        }
      }
    },
    // 姓名
    sex: {
      type: INTEGER(1),
      defaultValue: 0,
      validate: {
        isNumeric: true
      }
    },
    // 邮箱
    eamil: {
      type: STRING(64),
      validate: {
        isEmail: true
      }
    }
  });

  return User;
};
