/*
 * @Date: 2022年5月8日14:59:18
 * @LastEditors: 烟雨
 * @LastEditTime: 2022年5月8日14:59:21
 * @FilePath: \undefinedc:\Users\Administrator\Desktop\ck统计.js
 *
 */

//[rule: 统计]

function main() {
	var url = "xxxxx"
	var client_secret = "XXXXXXXX"
    var client_id = "XXXXXX"
    var content = request({ 
        "url": "http://"+url+"/open/auth/token?client_id="+client_id+"&client_secret="+client_secret,  //请求地址
        "method": "get",   //请求方式
        "dataType": "json"   //返回格式
    })
	//console.log(`${content.data.token}`)
	var ql = request({
        "url": "http://"+url+"/open/envs",
		"method": "get",   //请求方式
		"headers":{
			"content-type": "application/json",
			"Authorization": "Bearer "+`${content.data.token}`,
		},
        "dataType": "json"
      })
   sendText(`共有${ql.data.length}个ck,准备输出`)
   sleep(500)
   var info = "";
   for(var i=0;i<ql.data.length;i++){
		info += `${ql.data[i].value}`
		if(i % 10 == 0){
			sendText(info)
			sleep(10)
			msg=""
		}
  }
  if(msg!=""){
	  sendText(info)
  }
  
}
main()