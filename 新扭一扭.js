/*
 * @Author: 烟雨
 * @Date: 2022-03-30 11:12:34
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-03-30 11:14:12
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\扭.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
// [rule: 扭]

var url = "https://v.nrzj.vip/video.php"
var red = request({
        url: url,
        dataType: "location",
    })
    sendVideo(red)
