// [rule: vip ?]
// [rule: vip ]
// 解析路线
var parseInterfaces = [{ "name": "17yun", "url": "https://1717yun.com.zh188.net/1004/api.php?url=" }, { "name": "jy解析", "url": "https://jx.playerjy.com/?url=" },{ "name": "诺讯", "url": "http://www.ckmov.com/?url=" }, { "name": "ckmov", "url": "https://www.ckmov.vip/api.php?url=" }, { "name": "盘古", "url": "http://pangujiexi.cc/jiexi.php?url=" }, { "name": "mu38", "url": "https://okjx.cc/?url=" }, { "name": "虾米", "url": "https://jx.xmflv.com/?url=" }, { "name": "OK", "url": "https://api.okjx.cc:3389/jx.php?url=" }]


function main() {
  var sec = param(1);
  var i = 0
  var reg = /^((ht|f)tps?):\/\/[\w-]+(\.[\w-]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/;
  var parseInterfacesName = parseInterfaces.map(function (v, i) {
    var num = i + 1
    return "" + num + "：" + v.name + ""
  }).join('\n')
  var parseInterfacesUrl = []

  while (sec == "" || sec) {
    i++
    if (i > 6) return sendText("输入错误次数过多，已退出。")
    if (sec === 'q') return sendText("已退出操作")
    if (!reg.test(sec) && !parseInterfacesUrl.length) {
      sendText("请输入正确的链接，输入q退出")
      sec = input()
    }
    else if (Number(sec) >= 0 && Number(sec) <= parseInterfaces.length) {
      sleep(1000)
      sendText("" + parseInterfacesUrl[Number(sec - 1)] + "")
      sec = input()
      return
    } else {
      !parseInterfacesUrl.length && (parseInterfacesUrl = parseInterfaces.map(function (v, i) {
        return parseInterfaces[i].url + sec
      }))
      sleep(1000)
      sendText("请您选择需要的线路(输入序号)，输入q退出\n" + parseInterfacesName + "")
      sec = input()
    }
  }

}

main()
