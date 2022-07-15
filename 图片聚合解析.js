// [rule:图片解析 ?]
var kw = param(1);
kw = httpString(kw)[0];

sendText(
  "正在查询, 请稍后..." +
    "\n支持列表：抖音/快手/微博/皮皮虾/最右/小红书/instagram"
);
var o = {
  url: "https://tenapi.cn/images/?url="+kw,
  method: "get"
};
request(o, (err, resp, body) => {
  if (resp.statusCode == 200 && !err) {
  	body = JSON.parse(body);
	let _data = body.images, text="";
	_data.forEach((item)=>{
		text+=item+"\n";
	})
	sendText(text);
  } else {
    sendText("请求失败，请稍后再试。");
  }
});
function httpString(s) {
  var reg =
    /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
  s = s.match(reg);
  return s;
}
