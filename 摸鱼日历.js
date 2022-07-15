/*
 * @Author: 烟雨
 * @Date: 2022-05-28 14:56:10
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-05-28 14:56:34
 * @FilePath: \新建文件夹\摸.js
 * @Description: 
 * 烟雨阁-https://www.yanyuwangluo.cn/
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
// [rule: 摸]
// [cron: 0 8,11,16 * * *]

let content = request('https://api.j4u.ink/proxy/remote/moyu.json', (err, resp, body) => {
let data = JSON.parse(body);
let my = image(data.data.moyu_url)
let groups = [
     {
         imType: "wx",
         groupCode: 18076245008 ,//微信群号
     }
]

for (let i = 0; i < groups.length; i++) {
    groups[i]["content"] = my
    push(groups[i])
}
});