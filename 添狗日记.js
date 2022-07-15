/*
 * @Date: 2022年2月28日17:46:53
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年2月28日17:46:53
 */
// [rule: ^(.*)日记(.*)$]

//天行数据申请的key网站https://www.tianapi.com/，还得申请接口！！！
var key = "xxxxxxxxx";
var data = request({
	url: "http://api.tianapi.com/tiangou/index?key=" + key,
	method: "get",
	dataType: "json",
});
if(data["code"] == 200){
	sendText(data["newslist"][0]["content"]);
}else{
	sendText(data["msg"]);
}
