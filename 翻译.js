/*
 * @Date: 2022-01-16 12:35:40
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-01-16 12:53:43
 * @FilePath: \javascripts\功能类\翻译.JS
 */
// 翻译
// [rule: 翻译 ? ] 翻译 52
//自己去 https://www.tianapi.com/apiview/96 申请KEY替换一下
var key="xxxxxxxxx"//天行数据申请的key网站https://www.tianapi.com/
function main() {
  var address = param(1) //匹配规则第一个问号的值
  console.log(address)
  var content = request({
    // 内置http请求函数
    url:"http://api.tianapi.com/fanyi/index?key="+key+"&to=zh&text=" + address,//请求链接
    	  method: "get", //请求方法
      "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
  })
  //  if (!content) {
  //    data = "接口异常。" //请求失败时，返回的文字
  //}

  content = JSON.stringify(content)
  content = JSON.parse(content)
	
  if (content["code"] == 200) {
  	content = content.newslist[0]
    sendText(
      "来源语言:" +
        content.from +
        "\n目标语言:" +
        content.to +
        "\n翻译文本:" +
        content.src +
        "\n翻译结果:" +
        content.dst
    )
  } else {
    sendText(content.msg)
  }
}
main()
