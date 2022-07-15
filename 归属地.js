/*
 * @Date: 2022年2月28日17:40:25
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年2月28日17:40:25
 */
// [rule: 归属地 ? ] 归属地 手机号
//自己去申请id替换就行,申请地址：https://www.mxnzp.com/
var app_id = "xxxxxxxxx";
var app_secret = "xxxxxxxxxxxx";
function main() {
	var tel = param(1); //匹配规则第一个问号的值
	var data = request({
		// 内置http请求函数
		url:
			"https://www.mxnzp.com/api/mobile_location/aim_mobile?mobile=" +
			tel +
			"&app_id=" + app_id + "&app_secret=" + app_secret,
		method: "get", //请求方法
		dataType: "json", //这里接口直接返回文本，所以不需要指定json类型数据
	});
	if (data["code"] == "1") {
		sendText(data.data.carrier);
	} else {
		sendText(data.msg);
	}
}
main();
