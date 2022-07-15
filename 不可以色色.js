/*
 * @Author: 烟雨
 * @Date: 2022-04-18 14:42:45
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-04-18 14:43:46
 * @FilePath: \图片类\不可以色色.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
//[rule: cos ]
//[rule: 不可以色色 ]

function main() {

    var data = request({
      // 内置http请求函数
      url: "https://api.iyk0.com/cos", //请求链接
      dataType: "location", //指定数据类型
  
    });
  
    sendImage(data)
  
  }
  
  main()