// [rule: ^刷步$]
// [rule: ^刷步 (1\d{10}) (\w+) (\d{1,5})$]

function main() {
    var chatID = GetChatID() //获取当前群号
    var userID = GetUserID() //获取操作者QQ
    if (chatID == "0") { //判定为私聊
        if (userID == "") { //判定为定时任务
            var phone = "" //内置账号
            var pwd = "" //内置密码
            var min = 20000,
                //最小步数
                max = 25000; //最大步数
            var steps = Math.floor(Math.random() * (max - min) + min); //随机步数
            var database = request({ // 内置http请求函数
                "url": "http://mi.yanyuwangluo.cn/MiStepApi?user="+ phone + "&password=" + pwd + "&step=" + steps,
				//"url"："http://wmy.avdgw.com/api/mi.php?phone=" + phone + "&password=" + pwd + "&steps=" + steps,
                //请求链接
                "method": "get",
                //请求方法
                "dataType": "json",
                //指定json类型数据
            })
            var msg = database.msg
            notifyMasters(msg ) //通知管理员刷步情况
        } else {

            var phone = param(1) //匹配的账号
            var pwd = param(2) //匹配的密码
            var steps = param(3) //匹配的步数
            var xian = "100" //设定一个值，当步数小于此值时随机步数
            if (phone == "") {
                sendText("参数不全或格式错误\n请输入:刷步 小米运动账号 小米运动密码 步数\n例如：刷步 15888888888 Abc123456 6666\n注：账号只支持手机号码，步数输入小于100时随机30000~90000步！")
            } else {
                if (parseInt(xian) > parseInt(steps)) {
                    var min = 20000,
                    //最小步数
                     max = 25000; //最大步数
                    var steps = Math.floor(Math.random() * (max - min) + min); //随机步数
                    var database = request({ // 内置http请求函数
						"url": "http://mi.yanyuwangluo.cn/MiStepApi?user="+ phone + "&password=" + pwd + "&step=" + steps,
						//"url"："http://wmy.avdgw.com/api/mi.php?phone=" + phone + "&password=" + pwd + "&steps=" + steps,
                        //请求链接
                        "method": "get",
                        //请求方法
                        "dataType": "json",
                        //指定json类型数据
                    })
                    var msg = database.msg
                    sendText(msg ) //通知操作者
                } else {
                    var steps = param(3) //匹配的步数
                    var database = request({ // 内置http请求函数
						"url": "http://mi.yanyuwangluo.cn/MiStepApi?user="+ phone + "&password=" + pwd + "&step=" + steps,
						//"url"："http://wmy.avdgw.com/api/mi.php?phone=" + phone + "&password=" + pwd + "&steps=" + steps,	
                        //请求链接
                        "method": "get",
                        //请求方法
                        "dataType": "json",
                        //指定json类型数据
                    })
                    var msg = database.msg
                    sendText(msg ) //通知操作者
                }
            }
        }
    } else {
        sendText("为了保护你的隐私，请私聊") //在群发起时回复
    }
}

main()