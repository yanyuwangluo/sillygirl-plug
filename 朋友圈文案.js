/*
 * @Date: 2022-01-07 17:52:17
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-01-07 17:55:03
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\javascripts\朋友圈文案.js
 */
//[rule: 朋友圈文案 ] 朋友圈文案
//天行数据申请的key网站https://www.tianapi.com/
var key = "xxxxxxxxx";
function main() {
	var address = param(1); //匹配规则第一个问号的值
	var content = request({
		// 内置http请求函数
		url:
			"http://api.tianapi.com/pyqwenan/index?key=" + key , //请求链接
		method: "get", //请求方法
		dataType: "json", //这里接口直接返回文本，所以不需要指定json类型数据
	});
	var data = "";
	if (content.code == 200) {
		var list = content.newslist[0];
		data =
			
			list.content
	} else {
		data = "返回数据为空，。"; //接口异常，返回的文字
	}
	sendText(data);
}

main();
