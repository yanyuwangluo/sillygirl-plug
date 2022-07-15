/*
 * @Author: 烟雨
 * @Date: 2022年4月20日00:34:57
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年4月20日00:34:53
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\转口令.js
 * @Description: 
 * 
 * token获取方式
 * 获取 Token 找 秋名山車神 (https://t.me/FengYun7_bot)
 * 凨 Chat 通知群 https://t.me/windfgg_chart
 *
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
//[rule:code ?]
//[rule:转口令 ?]

var token = "xxxxxxxxxxxx"

var code = param(1);
sendText("正在解析口令，请稍等片刻......")
var _data = {"code": code}
request({
    url: 'https://api.windfgg.cf/jd/code',
    method: 'POST',
    dataType:'json',
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer "+token,
    },
    body: _data
},function(err, resp, data) {
    if (!err && resp.statusCode == 200) {
     if(data){
	 sendText("口令发起人："+data.data.userName + "\n链接："+ data.data.jumpUrl + "\n今日Token调用次数："+data.request_times + "次")}
    }else{
      sendText("单日请求上限"+ "\n当前请求次数为："+data.request_times + "次")
     }
});