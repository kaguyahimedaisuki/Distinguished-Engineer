// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  arrayNow:['a', 'b', 'c', 'd', 'e' , 'f', 'g'],
  arrayTemp:['a', 'b', 'c', 'd', 'e' , 'f' , 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  data: {
    array:['a', 'b', 'c', 'd', 'e' , 'f', 'g'],
    disabled1: false,
    disabled2: false
  },

add: function(e){
this.arrayNow.push(this.arrayTemp[this.arrayNow.length])
this.setData({
array:this.arrayNow
})
},
minus: function(e){
this.arrayNow.pop()
this.setData({
array:this.arrayNow
})
}
})
