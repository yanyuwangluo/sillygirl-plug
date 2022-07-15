// [rule: 今天节日]

var data = request({
	url: "https://api.iyk0.com/jr/",
	method: "get",
	dataType: "json",
});
if(data["code"] == 200){
	sendText(data["today"][0]["surplus"]);
}else{
	sendText(data["msg"]);
}
