/*
 * @Date: 2022年8月29日23:36:52
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年8月29日23:36:55
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\疫情.js
 * 更换接口
 */
// [rule: ?疫情 ] 武汉疫情
// [rule: 疫情 ? ] 疫情 武汉
function main() {
    var address = param(1) 
    var content = request({ 
        "url": "https://xiaobai.klizi.cn/API/other/yiqing.php?city=" + address ,  //请求地址
        "method": "get",   //请求方式
        "dataType": "json"   //返回格式
    })
        //sendText(content.data)
		sendText("查询地区:" + content.data.城市+
        "\n目前确诊：" + content.data.积累确诊 +
        "\n死亡人数：" +  content.data.死亡 + 
        "\n治愈人数："+ content.data.治愈 +
        "\n现存确诊:"+ content.data.现存确诊 +
        "\n现存无症状:"+ content.data.现存无症状 +
        "\n更新时间:"+ content.UpTime)
}
main()
