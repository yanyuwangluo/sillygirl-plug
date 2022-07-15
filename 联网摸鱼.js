// [rule: 摸鱼]
// [rule: 过年倒计时]
sendText(image("https://www.yanyuwangluo.cn/my") + "\n" + request("http://my.yanyuwangluo.cn").replace(/:/g, "").replace("自己的", "自己的。\n").replace("上班是", "\n上班是").replace(/<br\/>/g, "\n"))