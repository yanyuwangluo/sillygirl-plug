// [rule: 网易云]
// [rule: 网抑云]

var data = request({
	url: "https://api.uomg.com/api/comments.163?format=json",
	method: "get",
	dataType: "json",
});
if(data["code"] == 1){
	data = data["data"];
	sendText(data["content"]);
}else{
	sendText(data["msg"]);
}
