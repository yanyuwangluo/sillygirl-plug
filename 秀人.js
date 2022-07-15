// [rule: 秀人]
sendText("图片来咯......")
function main() {

  var data = request({
    // 内置http请求函数
    url: "https://api.yanyuwangluo.cn/xjjtu?type=json", //请求链接
    dataType: "json", //指定数据类型

  });

  sendImage(data.pic)

}

main()
