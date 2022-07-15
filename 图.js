// [rule: 来个图]
sendText("图片来咯......")
function main() {

  var data = request({
    // 内置http请求函数
    url: "https://www.prlrr.com/wallpaper-API/php-api/sexy.php", //请求链接
    dataType: "location", //指定数据类型

  });

  sendImage(data)

}

main()
