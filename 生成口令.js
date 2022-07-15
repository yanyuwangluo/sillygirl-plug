/*
 * @Author: 烟雨
 * @Date: 2022-04-02 09:03:57
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-04-02 10:45:52
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\转口令.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 * token获取方式
 * 获取 Token 找 小熊猫 (https://t.me/pang_da_bot)
 * 动物园通知群 https://t.me/zoo_channel
 */
//[rule:生成口令 ?]

var token = "xxxxxxxxxxxxx"

var week = new Date().getDay();
if (week == 0) {
	str = "今天是星期六,变量过期还有1天!更新去鸭！https://t.me/pang_da_bot";
	sendText(str)
} else if (week == 6) {
	str = "今天是星期六,变量过期还有1天!更新去鸭！https://t.me/pang_da_bot";
	sendText(str)
} 
var url = param(1);
var title = "烟雨阁" //自定义标题

var _data = {"url": url,"title": title}
request({
    url: 'http://windfgg.cf/jd/gcode',
    method: 'POST',
    dataType:'json',
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer "+token,
    },
    body: _data
},function(err, resp, data) {
    if (!err && data.request_times < 1000) {
     if(data){
	  sendText("正在生成口令，请稍等片刻......")
      sendText(data.data)}
    }else{
      sendText("单日请求上限"+ "\n当前请求次数为："+data.request_times + "次")	
     }
});
