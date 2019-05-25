//app.js
App({
  //com为快递公司种类，no为快递编号,cb为一个函数方法
  getExpressInfo: function (com, no, cb) {
    wx.request({
      url: 'http://v.juhe.cn/exp/index?key=8c25fc66e5b2aa32d1978556dd0c5b96&com=' + com + '&no=' + no, // 接口地址

      data: {
        x: '',
        y: ''
      },
      header: {
        'key': '8c25fc66e5b2aa32d1978556dd0c5b96'
      },
      success(res) {
        //console.log(res.data)
        cb(res.data)
      }
    })
  }
  // getcom:function(){
  //   wx.request({
  //     url: 'http://v.juhe.cn/exp/com?key=8c25fc66e5b2aa32d1978556dd0c5b96',
  //     data: {
  //       x: '',
  //       y: ''
  //     },
  //     header: {
  //       'key': '8c25fc66e5b2aa32d1978556dd0c5b96'
  //     },
  //     success(res) {
  //       console.log(res.data)
  //     }
  //   })
  // }
})