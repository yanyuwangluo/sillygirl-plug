// [rule:视频解析 ?]
var kw = param(1);
kw = httpString(kw)[0];

var o = {
	url: "https://tenapi.cn/video/?url=" + kw,
	method: "get",
	dataType: "json"
}
request(o, (err, resp, body)=>{
	if(resp.statusCode == 200 && !err){
		 var text = ""
		text += `标题：${body.title}\n视频连接：${body.url}` 
		sendText("正在查询, 请稍后..." + "\n支持列表：抖音/皮皮虾/火山/微视/微博/绿洲/最右/轻视频/instagram/哔哩哔哩/快手/全民小视频/皮皮搞笑全民k歌/巴塞电影/陌陌/Before避风/开眼/Vue Vlog/小咖秀/西瓜视频/逗拍")
		sendText(text)
		//新增支持（《我的框架》）
		//vlw请注释（sendVideo这一行）
		sendVideo(`${body.url}`)
	}else{
		sendText("请求失败，请稍后再试。")
	}
})
function httpString(s) {
  var reg =/(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
  s = s.match(reg)
  return s
}
