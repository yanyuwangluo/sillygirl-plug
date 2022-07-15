//[rule:^(.*)猜词(.*)$]
function main(){
	var i = 3;
	var timer = null;
	var count = 10;
//	timer = setInterval(function(){
		count --;
		var data = request({
			url:'http://xiaobai.klizi.cn/API/other/ysccy.php',
			dataType:'json'
		});
		console.log(data['answer'])
		sendText('问题：'+data["question"]+"\n\n提示："+data["tips"]+"\n\n你有"+ i +"次机会，投降请按q。");
		if (count <=0) clearInterval(timer);
		while(i>0){
			i--;
			var key = input();
			if(key == 'q') return sendText('已退出');	
			if(key == data["answer"]) return sendText("牛啊牛啊答对了");	
			if(i < 1) return sendText("铁fw，这都答不对，答案："+data["answer"])
			sendText("你答错了，还有"+i+"次机会");
		}	
//	},1000)
}
main();