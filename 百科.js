// [rule: 百科 ?] 百科 XX
function main(){
	var keywords = param(1);
	var data = request({
		url:'https://api.iyk0.com/sgbk/?msg='+keywords,
		dataType:'json'
	})
	if(data["code"] == 200){
		var info = data["data"] + "\n"
		info+=data["type"]+"\n";
		info+=data["url"]
		sendImage(data["img"]);
		sendText(info)
	}else{
		sendText("nono，无数据。")
	}
}
main();