/*
 * @Author: 烟雨
 * @Date: 2022-03-30 11:23:52
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-03-30 11:31:23
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\图片.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
// [rule: ins]
sendText("图片来咯......")
function main() {

  var data = request({
    // 内置http请求函数
    url: "https://3650000.xyz/api/?mode=2", //请求链接
    dataType: "location", //指定数据类型

  });

  sendImage(data)

}

main()
