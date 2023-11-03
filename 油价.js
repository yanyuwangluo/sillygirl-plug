/*
 * @Date: 2023-11-3 19:39:47
 * @LastEditors: 烟雨
 * @LastEditTime: 2023-11-3 19:39:47
 * @FilePath: \javascripts\功能类\油价.js
 */
//[rule: ?油价 ] 例北京油价
//[rule: 油价 ? ] 例油价 北京
//天行数据申请的key网站https://www.tianapi.com/
var key = "xxxxxxx";
function main() {
	var address = param(1); //匹配规则第一个问号的值
	var content = request({
		// 内置http请求函数
		url:
			"https://apis.tianapi.com/oilprice/index?key=" + key + "&prov=" + address, //请求链接
		method: "get", //请求方法
		dataType: "json", //这里接口直接返回文本，所以不需要指定json类型数据
	});
	var data = "";
	if (content.code == 200) {
		var list = content.result[0];
		data =
			"查询地区：" +
			list.prov +
			"\n零号柴油：" +
			list.p0 +
			"\n89号汽油：" +
			list.p89 +
			"\n92号汽油：" +
			list.p92 +
			"\n95号汽油：" +
			list.p95 +
			"\n98号汽油：" +
			list.p98 +
			"\n更新时间：" +
			list.time.slice(0,10);
	} else {
		data = "返回数据为空，只可查询省份油价。"; //接口异常，返回的文字
	}
	sendText(data);
}

main();
