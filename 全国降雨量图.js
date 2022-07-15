/*
 * @Date: 2022年1月18日19:49:53
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年1月18日19:49:56
 * @FilePath: \javascripts\图片类\全国降雨量图.js
 */
//[rule: 降雨预报 ]
//[rule: 全国降雨预报]
function main() {

  var data = request({
    // 内置http请求函数
    url: "https://api.iyk0.com/jyu/?type=img", //请求链接
    dataType: "location", //指定数据类型

  });

  sendImage(data)

}

main()