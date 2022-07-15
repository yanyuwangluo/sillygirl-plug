/*
 * @Author: 烟雨
 * @Date: 2022-04-18 14:42:44
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-04-18 14:47:24
 * @FilePath: \图片类\买家秀3.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */

//[rule: 买家秀2]

function main() {

    var data = request({
      // 内置http请求函数
      url: "https://api.uomg.com/api/rand.img3?format=images", //请求链接
      dataType: "location", //指定数据类型
  
    });
  
    sendImage(data)
  
  }
  
  main()