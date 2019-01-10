// app/extend/helper.js
module.exports = {
  formatData(code, data, message) {
    let d = {
      code,
      message
    };
    // 成功
    if (d.code === 0) {
      d.data = data;
      d.type = null;
    } else {
      d.data = null;
      d.type = data && data.type ? data.type : null;
    }
    try {
      d = JSON.stringify(d);
    } catch (error) {
    }
    return d;
  }
};
