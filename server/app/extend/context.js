// app/extend/context.js
module.exports = {
  send(data, msg) {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    if (msg) {
      this.error(data, msg);
    } else {
      this.body = this.helper.formatData(0, data, msg);
    }
  },

  error(data, msg) {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    this.body = this.helper.formatData(-1, data, msg);
  }
};
