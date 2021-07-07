// pages/col/col.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
num:0
    },
handletap(e){
    console.log(e)
    const operation = e.currentTarget.dataset.operation;
    this.setData({
        num:this.data.num + operation
    })
}
    
})