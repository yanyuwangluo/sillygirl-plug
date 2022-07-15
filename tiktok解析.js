/*
 * @Author: 烟雨
 * @Date: 2022-04-06 16:39:49
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-04-06 16:49:51
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\tiktok解析.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 * 
 * tiktok视频解析-返回的播放地址需要代理播放
 */
// [rule:tk ?]
sendText()
var kw = param(1);
kw = httpString(kw)[0];
sendText("正在查询, 请稍后...")
var o = {
	url: "https://douyin.wtf/api?url=" + kw,
	method: "get",
	dataType: "json"
}
request(o, (err, resp, body)=>{
	if(resp.statusCode == 200 && !err){
		var text = ""
		text += `标题：${body.video_title}\n作者：${body.video_author}\n视频连接：${body.video_url}`
		sendText(text)
	}else{
		sendText("请求失败，请稍后再试。")
	}
})
function httpString(s) {
  var reg =/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
  s = s.match(reg)
  return s
}