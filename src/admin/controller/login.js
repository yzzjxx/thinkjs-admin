const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  /**
   * 登录
   */
  async loginAction() {
    if (this.isPost) {
      let username = this.post('username');
      let password = this.post('password');
      let data = await this.model('user').where({ username: username, password: password }).find();
      if (think.isEmpty(data)) {
        return this.fail(403, '账号密码错误！请重新填写');
      } else {
        this.session('userinfo', data);
        return this.redirect('/');
      }
    }
    return this.display();
  }
  /**
   * 获取头像
   */
  async avatarAction() {
    if (this.isGet) {
      let username = this.get('username');
      let data = await this.model('user').where({ username: username }).getField('avatar',true);

      return this.success(data);
    }
  }
};
