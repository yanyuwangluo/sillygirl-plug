//[rule: 青龙指令 ]
//[rule: 青龙命令 ]
sendText("一键部署脚本：'wget -q https://gitee.com/yanyuwangluo/onekey/raw/master/Onkey/xinql.sh -O xinql.sh && bash xinql.sh'" + 
		"\n  " +
		"\n注：一下命令都需要进容器内执行‘docker exec -it 容器名 bash’" +
	    "\n1.ql update             #更新并重启青龙" +
	    "\n2.ql extra              # 运行自定义脚本" +
	    "\n3.ql rmlog 7            # 删除7天旧日志" +
	    "\n6.ql bot                # 启动tg-bot" +
	    "\n7.ql check              # 检测青龙环境并修复" +
	    "\n8.ql resetlet           # 重置登录错误次数" +
	    "\n9.ql resettfa           # 禁用两步登录")