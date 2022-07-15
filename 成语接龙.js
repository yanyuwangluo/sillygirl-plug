//[rule:成语接龙]

var begin = ""
var s = Sender

function main() {
     var id = "" + new Date().getTime()
     var data = request("http://hm.suol.cc/API/cyjl.php?id=" + id + "&msg=开始成语接龙") + ""
     fword(data)
     if (!begin) {
          return "游戏故障。"
     }
     sendText(data)
     var stop = false
     var win = false
     var uid = s.GetUserID()
     if (strings.Contains(data, "你赢")) {
          stop = true
          win = true
     }
     if (strings.Contains(data, "我赢")) {
          stop = true
     }
     s.Await(0, true, function (s) {
          var ct = s.GetContent()
          var me = s.GetUserID() == uid
          if (strings.Contains(ct, "提示") || ct == "q") {
               s.SetContent(`小爱${begin}字开头的成语有哪些？`)
               s.Continue()
               return GoAgain()
          }
          if (strings.Contains(ct, "认输")) {
               if (me || s.IsAdmin()) {
                    stop = true
                    return
               } else {
                    return GoAgain("你不可以认输哦～")
               }
          }
          if (!RegExp("^" + begin).exec(ct) || strings.Contains(ct, "接龙")) {
               if (me && s.GetImType() != "wxsv") {
                    return GoAgain(`现在是接【${begin}】开头的成语哦，退出请对我说“认输”。`)
               } else {
                    if (ct == "成语接龙") {
                         return GoAgain(fmt.Sprintf("现在是接【%s】开头的成语哦。", begin))
                    }
                    s.Continue()
                    return GoAgain()
               }
          }
          data = request("http://hm.suol.cc/API/cyjl.php?id=" + id + "&msg=我接" + ct) + ""
          if (data.indexOf("file_get_contents") != -1) {
               return GoAgain(data.split("\n").pop())
          }
          if (strings.Contains(data, "你赢")) {
               stop = true
               win = true
          } else if (strings.Contains(data, "我赢")) {
               stop = true
               win = false
          } else if (strings.Contains(data, "恭喜")) {
               fword(data)
          }
          uid = s.GetUserID()
          if (!stop) {
               return GoAgain(data)
          }
          return data
     })
     sleep(1000)
     if (!win) {
          return ("别灰心，下次再来比试一番！")
     }
     return ("下次我一定可以打败你～")
}

var strings = {
     Contains: function (a, b) {
          return a.indexOf(b) != -1
     }
}

function fword(cy) {
     var res = /([一-龥])】/.exec(cy)
     begin = res ? res[1] : ""
     begin = begin.replace(/】/g, "")
     return begin
}

sendText(main())