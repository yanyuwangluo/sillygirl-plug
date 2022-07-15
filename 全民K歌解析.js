/*
 * @Date: 2022年5月6日02:16:15
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年5月6日02:16:11
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\全民K歌解析.js
 *
 */

//[rule: k ?]

function main() {
    var address = param(1) 
    var content = request({ 
        "url": "https://api.uomg.com/api/get.kg?songurl=" + address ,  //请求地址
        "method": "get",   //请求方式
        "dataType": "json"   //返回格式
    })
	let dwz = request({
        url: "https://api.ooomn.com/api/dwz?type=aad&url=" + `${content.data.playurl}`,
        dataType: "json",
      }).short;
      sendText(`歌曲名：${content.data.song_name}\n歌曲连接：${dwz}`);
}
main()