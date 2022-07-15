// [rule: 新闻]
// [cron: 30 8 * * *]

var content = image("https://api.qqsuu.cn/api/60s") + "\n每日新闻来咯！！！" 
var groups = [
     {
         imType: "wx",
         groupCode: 18076245008 ,//微信群号
     }
]

for (var i = 0; i < groups.length; i++) {
    groups[i]["content"] = content
    push(groups[i])
}