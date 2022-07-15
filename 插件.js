/*
 * @Author: 烟雨
 * @Date: 2022年4月16日04:19:26
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年4月16日04:19:30
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\烟雨阁插件.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
//[rule: 插件]

let pass = "" 
let path = "/傻妞插件分享"
let _date = {"path": path,"password": pass}
let result = request({
    url: 'https://wpan.yanyuwangluo.cn/api/public/path',
    method: 'POST',
    body: _date});
let info = "----当前插件列表----\n所有插件下载地址：\nhttp://wpan.yanyuwangluo.cn\n--------\n";
_data = JSON.parse(result);
data = _data.data.files;


for(let i=0;i<data.length;i++){
 info += `\n插件名：${data[i].name}
 更新时间：${data[i].updated_at.slice(0,10)}
 `;
}

sendText(info)