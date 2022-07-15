//[rule: 配置检测]
// [admin: true] 是否只允许管理员使用
function main() {
		//端口
		var dk = bucketGet("sillyGirl", "port") //取值	
        var bucket = "sillyGirl"
        var newkey = "port"
		//http
		var http = bucketGet("sillyGirl", "enable_http_server")
		var bucket = "sillyGirl"
        var newkey = "enable_http_server"
		//微信token
		var wxt = bucketGet("wx", "vlw_token")
		var bucket = "wx"
        var newkey = "vlw_token"
		//微信apivlw
		var wxa = bucketGet("wx", "vlw_addr")
		var bucket = "wx"
        var newkey = "vlw_addr"
		//下载
		var down = bucketGet("sillyGirl", "download_prefix") //取值
        var bucket = "sillyGirl"
        var newkey = "download_prefix"
		//qq
		var qq = bucketGet("qq", "default_bot") //取值
        var bucket = "qq"
        var newkey = "default_bot"
		//web密码
		var web = bucketGet("sillyGirl", "adminPassword") //取值
        var bucket = "sillyGirl"
        var newkey = "adminPassword"
		//芝士开启状态
		var zs = bucketGet("jd_cookie","asset_query_alias") //取值
        var bucket = "jd_cookie"
        var newkey = "asset_query_alias"
		//tgtoken
		var telegram = bucketGet("tg","token") //取值
        var bucket = "tg"
        var newkey = "token"
		//tg代理
		var telegram2 = bucketGet("tg","http_proxy") //取值
        var bucket = "tg"
        var newkey = "http_proxy"
		
	var pz = ("傻妞端口：" +dk+
			"\n芝士开启状态" +zs+
			"\n微信token：" +wxt+
			"\n微信Api：" +wxa+
			"\nhttp开启状态：" +http+
			"\n傻妞下载代理：" +down+
			"\nQQ机器人主人账号：" +qq+
			"\nweb密码：" +web+
			"\nTgtoken：" +telegram+
			"\nTg代理：" +telegram2)
			
	sendText(pz)
	}
main()