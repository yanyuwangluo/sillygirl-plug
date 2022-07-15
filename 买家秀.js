/*
 * @Author: 烟雨
 * @Date: 2022-04-18 14:42:44
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-04-18 14:47:01
 * @FilePath: \图片类\买家秀.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
//[rule: 买家秀]

function main() {

    var data = request({
      // 内置http请求函数
      url: "https://api.ghser.com/tao/?type=json", //请求链接
      dataType: "json", //指定数据类型
  
    });
    sendText(`${data.title}${image(data.pic)}`)
  }
  
  main()