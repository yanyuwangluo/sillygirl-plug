//[rule:^(.*)谜语(.*)$]

function main(){
	var i = 3;
	var data = request({
		url:'http://xiaobai.klizi.cn/API/other/cmy.php',
		dataType:'json'
	});
	console.log(data['Answer'])
	sendText('题目：'+data["Riddle"]+"\n你有"+ i +"次机会，记得把握哦，如果没脑子了可以按q退出哦");
	while(i>0){
		i--;
		var key = input();
		if(key === 'q') return sendText('已退出');	
		if(key === data["Answer"]) return sendText("牛啊牛啊答对了");	
		if(i>=1){
			sendText("你答错了，还有"+i+"次机会");
		}else{
			sendText("铁fw，这都答不对，答案："+data["Answer"])
		}
	}	
}
main();