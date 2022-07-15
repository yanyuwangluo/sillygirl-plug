//[rule: 来一首 ?]来一首 花海
//[rule: 来一首?]来一首花海

function main() {
    var address = param(1) //匹配规则第一个问号的值
    var content = request({ // 内置http请求函数
        "url": "http://xiaobai.klizi.cn/API/music/qqmusic.php?msg=" + address + "&n=1&c=js", //请求链接
        "method": "get", //请求方法
        "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
    })
 var list = content;
  data = 
		"\n歌名：" + list.song + 
		"\n作者：" +list.singer + 
		"\n歌曲地址：" + list.url
  sendText(`${data}${image(list.img)}`)
}

main()