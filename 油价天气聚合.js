/*
 * @Author: 烟雨
 * @Date: 2022-05-12 08:48:28
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-05-12 09:27:23
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\定时.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */


// [rule: t ] 
// [cron: * */1 * * *] 定时任务



var key = "xxxxxxxxxxxxx" //天行api的key

var app_id = "xxxxxxxxxxxxx"  //https://www.mxnzp.com/

var app_secret = "xxxxxxxxxxxxx" //https://www.mxnzp.com/

var address = "北京" //定义地区

function main() {  //天气的
	var data = request({
		"url": "https://www.mxnzp.com/api/weather/current/" + address + "?app_id=" + app_id + "&app_secret=" + app_secret,
		"method": "get", 
		"dataType": "json", 
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
		//	sendText(info);
	} else {
		//	sendText(data.msg);
	}
	var yj = request({ //油价的
		url: "http://api.tianapi.com/oilprice/index?key=" + key + "&prov=" + address, 
		method: "get", 
		dataType: "json", 
	});
	var data = "";
	if (yj.code == 200) {
		var list = yj.newslist[0];
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
			list.time.slice(0, 10);
	} else {
		//	data = "返回数据为空，只可查询省份油价。"; //接口异常，返回的文字
	}
	//sendText(data);
	var content = `${info}\n-----------\n${data}`  //把两个请求的内容汇聚
	var groups = [ //定时加for
		{
			imType: "wx",
			groupCode: 19799553976,
		}
	]
	for (var i = 0; i < groups.length; i++) {
		groups[i]["content"] = content
		push(groups[i])
	}
}
main();