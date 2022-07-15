/*
 * @Author: 烟雨
 * @Date: 2022-04-18 14:42:44
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-04-18 14:45:12
 * @FilePath: \图片类\妹妹.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
//[rule: mm ]
// [rule: ^(.*)妹妹(.*)$]

function main() {

    var data = request({
      // 内置http请求函数
      url: "http://3650000.xyz/random", //请求链接
      dataType: "location", //指定数据类型
  
    });
  
    sendImage(data)
  
  }
  
  main()