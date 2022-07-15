//看图猜成语
// [rule: 猜成语]
function listen() {
	var red = request({
		url: "https://api.iyk0.com/ktc/"
	})
	var json = JSON.parse(red)
	return [json.img,json.key]
}
function main () {
	answer = listen()
	sendImage(answer[0])
	sendText("请输入正确的成语：")
	str = input()
	switch(str) {
		case answer[1]:
			sendText("恭喜你回答正确,\n请继续猜成语\n退出，请回复【q】")
			main()
			break
		case 'q':
			return sendText("已退出游戏")
			break
		default:
			sendText("回答错误，请输入正确答案:")
			for(var i = 0; i < 6; i++){
				a = input()
				switch(a) {
					case answer[1]:
						sendText("恭喜你回答正确,\n请继续猜成语\n退出，请回复【q】")
						break
					case 'q':
						return sendText("已退出游戏") 
					default:
						sendText("回答错误，请输入正确答案:")
				}
			}
			return sendText("回答错误次数太多，已结束游戏")
	}

}
main()