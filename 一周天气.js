/*
 * @Author: 烟雨
 * @Date: 2022-04-14 11:04:26
 * @LastEditors: 烟雨
 * @LastEditTime: 2022-04-14 11:50:42
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\一周天气.js
 * @Description: 
 * 
 * 自己起天行申请接口https://www.tianapi.com/apiview/72
 * 
 * Copyright (c) 2022 by 烟雨, All Rights Reserved. 
 */
//[rule: ? 一周 ] 例北京 一周
//[rule: 一周 ? ] 例一周 北京


var key = "xxxxxxx";


let result = request("http://api.tianapi.com/tianqi/index?key="+ key +"&city="+param(1));
let info = "----"+param(1)+"7天天气----\n";
_data = JSON.parse(result);
data = _data.newslist;


for(let i=0;i<data.length;i++){
 info += `\n⌛星期：${data[i].week}
 \n🌞早晚天气变化：${data[i].weather}
 \n🌡️温度：${data[i].real}
 \n⛱️最低温:${data[i].lowest}
 \n⛱️最高温：${data[i].highest}
 \n🌬️风向：${data[i].wind}
 \n🌬️风速km/h：${data[i].windspeed}
 \n🌬️风力：${data[i].windsc}
 \n☁️降雨量：${data[i].pcpn}
 \n☁️降雨概率：${data[i].pop}
 \n☂️紫外线强度指数：${data[i].uv_index}
 \n👁️能见度/公里：${data[i].vis}
 \n🧥生活指数提示：${data[i].tips}
 \n⌚时间：${data[i].date}
 `;
}

sendText(info)