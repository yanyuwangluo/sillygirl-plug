//[rule:ping ?]
var code = param(1);
sendText("正在Ping，请稍等片刻......")
function main() {
    var address = param(1) //匹配规则第一个问号的值
    var content = request({ // 内置http请求函数
        "url": "https://api.iyk0.com/ping/?url=" + address, //请求链接
        "method": "get", //请求方法
        //"dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
    })
	  sendText(content)
}

main()