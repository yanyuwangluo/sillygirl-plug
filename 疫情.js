/*
 * @Date: 2022年8月15日17:36:01
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年8月15日17:36:01
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\疫情.js
 * 修复接口
 */
// [rule: ?疫情 ] 武汉疫情
// [rule: 疫情 ? ] 疫情 武汉
function main() {
    var address = param(1) 
    var content = request({ 
        "url": "https://xiaobai.klizi.cn/API/other/yiqing.php?city=" + address ,  //请求地址
        "method": "get",   //请求方式
        //"dataType": "json"   //返回格式
    })
        sendText(content)
}
main()
