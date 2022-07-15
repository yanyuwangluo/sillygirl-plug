// 王者荣耀低战力查询
// [rule: 低战力 ? ?] 低战力 孙悟空 qq
function main() {
    var hero = decodeURIComponent(param(1))
    var server = param(2)
    var data = request({
        url: "https://jk.cxkf.cc/api_select.php?hero=" + hero + "&type=" + server,
        "method": "get", //请求方法
        "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
    })
    if (data["code"] == 200) {
        var info = image(data["photo"])
        info += "\n英雄名称：" + data["name"]
        info += "\n英雄描述：" + data["alias"]
        info += "\n区级地区：" + data["area"]
        info += "\n区级地区最低分：" + data["areaPower"]
		info += "\n市级地区：" + data["city"]
		info += "\n市级最低分：" + data["cityPower"]
		info += "\n省级地区：" + data["province"]
		info += "\n省级地区最低分：" + data["provincePower"]
		info += "\n区服：" + data["platform"]
		info += "\n更新时间：" + data["updatetime"]
        sendText(info)
    } else {
        sendText(data.msg)
    }
}
main()