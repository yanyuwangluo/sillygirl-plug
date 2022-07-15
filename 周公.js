//[rule: ?周公 ] 例北京油价
//[rule: 周公 ? ] 例油价 北京
//天行数据申请的key网站https://www.tianapi.com/
var key="xxxxxxxxxxxxxx"
function main() {
    var address = param(1) //匹配规则第一个问号的值
    var content = request({ // 内置http请求函数
        "url": "http://api.tianapi.com/dream/index?key="+key+"&num=2"+ "&word=" + address, //请求链接
        "method": "get", //请求方法
        "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
    })
 var data='';
    if(content.code == 250) {
        data ="查询关键词错误，请重新输入关键词" //请求失败时，返回的文字
    }else if(content.code == 200){
  var list = content.newslist[0];
  data ="数据ID：" +list.id+"\n类型：" + list.type +"\n标题：" +  list.title + "\n内容："+ list.result
 }else{
  data="接口异常。"//接口异常，返回的文字
 }
 sendText(data)
}

main()
