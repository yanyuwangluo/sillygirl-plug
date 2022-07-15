/*
 * @Date: 2022年2月28日17:40:25
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年2月28日17:40:25
 */
// 天气查询
// [rule: ?天气 ] 北京天气
// [rule: 天气 ? ] 天气 北京
//自己去申请id替换就行,申请地址：https://www.mxnzp.com/
var app_id = "xxxxxxxxx";
var app_secret = "xxxxxxxxxxxx";
function main() {
	var address = param(1);
	var data = request({
		url:
			"https://www.mxnzp.com/api/weather/current/" +
			address +
			"?app_id=" + app_id +"&app_secret=" + app_secret,
		method: "get", //请求方法
		dataType: "json", //这里接口直接返回文本，所以不需要指定json类型数据
	});
	if (data["code"] == 1) {
		data = data.data;
		var info = "地区：" + data["address"];
		info += "\n地区编号：" + data["cityCode"];
		info += "\n温度：" + data["temp"];
		info += "\n天气：" + data["weather"];
		info += "\n风力：" + data["windPower"];
		info += "\n湿度：" + data["humidity"];
		info += "\n更新时间：" + data["reportTime"].slice(0, 10);
		sendText(info);
	} else {
		sendText(data.msg);
	}
}
main();
