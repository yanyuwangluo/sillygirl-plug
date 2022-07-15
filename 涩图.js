/*
 * @Author: 烟雨
 * @Date: 2022-04-18 14:42:45
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-04-18 14:44:19
 * @FilePath: \图片类\涩图.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
//[rule: mma ]
//[rule: 涩图 ]

function main() {

    var data = request({
      // 内置http请求函数
      url: "https://www.hlapi.cn/api/mjx", //请求链接
      dataType: "location", //指定数据类型
  
    });
  
    sendImage(data)
  
  }
  
  main()