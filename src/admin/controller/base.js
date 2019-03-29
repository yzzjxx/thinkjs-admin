module.exports = class extends think.Controller {
  async __before() {
    if(this.ctx.controller === 'login' && this.ctx.action === 'index' || this.ctx.action === 'login') {
      return;
    }
    let userinfo = await this.session('userinfo');
    if(!think.isEmpty(userinfo)) {
      this.assign('userinfo',userinfo);
    } else {
      // return this.redirect('/admin/index');
    }
  }
};
