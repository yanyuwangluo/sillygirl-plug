// [rule: token更新]
// [cron: 30 8 1 * 6]

var groups = [
     {
         imType: "wx",
         groupCode: 18076245008  ,
     }
]

for(let i = 0;i<=10; i++){
 sendText("该更新token啦，别忘记喊着烟雨！！！" + "\n更新token地址 - https://t.me/pang_da_bot")
}