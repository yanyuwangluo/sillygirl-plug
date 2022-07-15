// [rule: 傻妞?  ]
function main() {
  var key = param(1) //匹配到的第一个参数
  var data = request({
    // 内置http请求函数
    url: "https://api.iyk0.com/liaotian/?msg=" + key, //请求链接
    method: "get", //请求方法
    dataType: "text", //指定数据类型
  });
  
  sendText(data)
  
}
main()