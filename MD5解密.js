/*
 * @Date: 2022年2月28日18:41:37
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年2月28日18:41:37
 */
//[rule: md5? ] 
function main() {
  var md5 = param(1) //匹配到的第一个参数
  var data = request({
    // 内置http请求函数
    url: "https://api.iyk0.com/md5/dec/?md5=" + md5, //请求链接
    method: "get", //请求方法
    dataType: "json", //指定数据类型
  });
  
  sendText(data.text)
  
}
main()