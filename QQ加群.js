/*
 * @Date: 2022年4月12日00:48:36
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年4月12日00:48:32
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\qq加群.js
 *
 * key获取地址：https://api.muxiaoguo.cn/user/login.html
 */

//[rule: qq加群 ?]
//[rule: QQ加群 ?]

var token = "xxxxx"

var address = param(1);
var data = request({
	url: "https://api.muxiaoguo.cn/api/qun?api_key="+token+"&guin="+address+"&type=2",
	method: "get",
	dataType: "json",
});
if(data["code"] == 200){
	data = data["data"];	
	sendText("加群链接：" + data["url"]);
}else{
	sendText(msg);
}

