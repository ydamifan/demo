//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputdata:null,    //快递单号
    express_type:null,  //快递种类
    expressInfo:null,   //物流信息
    index: 0, //默认下标
    express: ['顺丰快递', '申通快递', '圆通快递', '韵达快递', '天天快递', '邮政快递', '中通快递'], //选择器中的选项 
    com_array: ['sf', 'sto', 'yt', 'yd', 'tt', 'ems', 'zto'],  
    com:'sf' //默认为顺丰
  },
  input:function(e){
    this.setData({inputdata:e.detail.value})//获取输入框内容
    //console.log(this.data.inputdata)
  },
  choose:function(e){
    this.setData({index:e.detail.value}) //展示快递公司
    this.setData({com:this.data.com_array[this.data.index]})
   // console.log(this.data.com)
  },
  btnClick: function () {
    var thispage=this;
    app.getExpressInfo(this.data.com,this.data.inputdata,function(data)
    {
      //console.log(data)
      thispage.setData({expressInfo:data})
    })
    //app.getcom()
  }
})
