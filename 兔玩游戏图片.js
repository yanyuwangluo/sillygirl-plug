/*
 * @Date: 2022-03-17 12:11:49
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-03-17 12:12:08
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\兔玩游戏图片.js
 */
// [rule: 我要冲]
sendText("图片来咯。。。")
function main() {

  var data = request({
    // 内置http请求函数
    url: "https://api.uomg.com/api/rand.img4", //请求链接
    dataType: "location", //指定数据类型

  });

  sendImage(data)

}

main()
