// [rule: 外卖]
// [rule: 饿了么]
// [rule: 美团]
// [cron: 0 7,11,17 * * *]

var content = image("http://tu.yanyuwangluo.cn/2022/01/16/cf2b78ea23c39.jpg") + "\n哈喽~点餐时间到咯，先领个红包!\n小助手每天负责提醒您领红包优惠哦~\n\n【今日外卖链接已更新】\n\n____________________\n↓ 美团饿了么20-5保底↓"
var groups = [
     {
         imType: "wx",
         groupCode: 18076245008 ,
     }
]

for (var i = 0; i < groups.length; i++) {
    groups[i]["content"] = content
    push(groups[i])
}