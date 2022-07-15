//============js聊天插件================

// [rule: ^demo(.*)$] 使用正则匹配,括号中为期望匹配的值
// [rule: demo ?] 使用问号匹配
// [rule: demo] 直接匹配
// [cron: 36 11,17 * * *] 定时任务
// [admin: true] 是否只允许管理员使用
// [disable: false] 是否禁用
// [priority: 10] 匹配优先级
// [server: 1 ] 如果不指定rule和cron时,设置为非空则指定为一个空服务,否则这个js不会加载

//傻妞对象
SillyGirl()//获取傻妞对象
sillyGirl//傻妞对象
{//SillyGirl对象内置函数
   //存储相关 sillyGirl存储结构为 {mainKey1:{key1:value,key2:value},mainKey2:{key1:value,key2:value}}}
    bucketKeys(mainKey)//获取所有key名称
    bucketGet(mainKey,key)//取值
    bucketSet(mainKey,key,value)//存值
    push({
        imType:string,//发送到指定渠道,如qq,wx,必须
        userID:"",//groupCode不为0时为@指定用户,可选
        groupCode:"",//可选
        content:string,//发送消息
    })//给指定im发送消息
    session({
        imTpye:"",//模拟指定渠道,如qq,wx,非必须,默认类型carry
        msg:"",//发送的消息,必须
        chatId: 0,//模拟的群号,必须是数字
        userId:""//模拟的用户id
    })//模拟一条im消息,可以多次发送,使用Session("msg")为使用默认配置
    //返回值为一个函数,可多次调用,每次返回交互结果,具体结构为{hasNext:true,message:"msg"}
}

Sender//Sender对象
{
    Sender:{//真实的Sender对象,可以做更多事,但更复杂,一般情况请勿使用
        GetUserID()// 发送人用户id
    	GetChatID()// 群号
    	GetImType()// 聊天来源类型如:qq,wx等,其中fake为特殊调用可能为cron调用
    	GetMessageID()// 获取消息id
    	RecallMessage(id)// 撤回消息
    	GetUsername()// 发送人名称
    	GetChatname()// 群名,不一定精确
    	IsReply()// 是否为回复消息
    	GetReplySenderUserID()// 获取回复的消息id
    	GetRawMessage()//获得原始的消息,根据ImType不一样,消息也不一样
    	SetMatch([]string)//设置Match,映像参数获取
    	SetAllMatch([][]string)//设置Match,影响参数获取
    	GetMatch()//获取Match,获取参数匹配的规则
    	GetAllMatch()//获取所有Match,结构双层数组
    	Get(...int)//获取Match,获取指定位置参数,返回string
    	GetContent()//获取消息
    	SetContent(string)//设置消息
    	IsAdmin()// 是否管理
    	IsMedia()// 是否媒体资源
    	Reply("")// 回复消息
    	Delete()//删除(撤回)当前消息
    	Disappear(lifetime ...time.Duration)//设置消息有效时长,到时间自动撤回,部分ImType有效
    	Finish()//结束时调用,不要调用,否则可能出奇奇怪怪的bug
    	Continue()//继续,允许该消息被后续插件继续处理
    	IsContinue()//是否继续
    	ClearContinue()//清理是否继续,禁止后续插件继续处理
    	Await(Sender, func(Sender) interface{}, ...interface{})//等待一条消息,js中不要使用,容易出各种bug
    	Copy()//复制
        GroupBan(uid, time)//群禁言,需要在群聊才可用
        GroupKick(uid, reject)//群踢人,reject为是否拉黑名单,需要在群聊才可用
    	AtLast()//设置回复的消息暂时先存储,等会一起发送
    	UAtLast()//取消消息的暂时存储,改为立即发送
    	IsAtLast()//是否暂存消息
    	MessagesToSend()// 获取将要发送的消息
    }
    Continue()//同Sender
    GetUserID() //同Sender
    SetContent(s string)  //同Sender
    GetContent() string  //同Sender
    GetImType() string //同Sender 
    RecallMessage(p ...interface{}) //同Sender
    GetUsername() string //同Sender
    GetMessageID() string  //同Sender
    GetGroupCode() int  //同Sender
    IsAdmin() bool  //同Sender
    Reply(text string) []string //同Sender
    Await(timeout, fromGroup, callback)//等待一条消息,fromGroup:布尔值,是否允许从当前群接受所有人消息,callback属于冗余设计,不需要填写,当不存在就行
}

//上下文获取
param(n)//获取rule中期望捕获的第n个字符串,中文需要使用 encodeURI(param(n))
ImType()//聊天来源类型如:qq,wx等,其中fake为特殊调用可能为cron调用
GetImType()//同ImType()
GetUserID()//发送人用户id
GetUsername()//发送人昵称
GetMessageID()//获取消息id
GetChatID()//群号
GetChatname()//群名
GetContent()//获取接受到的消息
isAdmin()//发送人是否管理员

//系统功能相关
importJs(js)//引用一个js文件,路径相对replies目录,如:importJs('test/test.js') importJs('./test')
importDir(dir)//引用一个目录的js文件,路径相对replies目录,如:importDir('test/test1') importDir('./test/')
cancall(name)//返回特殊调用的函数
call(name,value)//特殊调用
Debug(log)//打印日志
sleep(millisecond)//休眠
GroupBan(uid, time)//群禁言,需要在群聊才可用
GroupKick(uid, reject)//群踢人,reject为是否拉黑名单,需要在群聊才可用
timeFmt("2020-01-01 00:00:00")//按指定格式获取当前时间字符串
request({
    url:"",//必须
    method:"",//get,post,put,delete,可选,默认get
    headers:{},//可选
    body:"",//可选
    dataType:"",//location=>重定向url,json=>尝试解析为对象,否则为body字符串,可选
    useproxy:false,//可选
    timeOut:millisecond,//可选,请求超时
}
//,function(error,info,body){} 可选参数请求回调,回调参数分别为:错误信息,请求信息,请求结果,获取http状态码使用info结构为{status,body,header}
)//发送请求
require("request")//固定写法,获取request函数
Logger()//获取log对象,用法Logger().log(xxx)  Logger().error(xxx)
console.log("string")//简单适配的日志工具,也支持console.info(xxx) console.error(xxx)
nil//go语言中的null

//存储相关 sillyGirl存储结构为 {mainKey1:{key1:value,key2:value},mainKey2:{key1:value,key2:value}}}
bucketGet(mainKey,key)//同傻妞同名函数
bucketSet(mainKey,key,value)//同傻妞同名函数
bucketKeys(mainKey)//同傻妞同名函数
get(key)//同bucketGet("otto",key)
set(key,value)//同bucketSet("otto",key,value)

//消息相关
input(time /*[,str]*/)//等待下一个消息,str不为空时可接受其他群的消息
breakIn(str)//生成一个新的消息向下传递,可以被所有命令处理(包括当前js,所以需要防止递归)
Continue()//消息继续向下传递，可以被其他命令处理
Delete()//删除接受到的这条消息
RecallMessage(id)//撤回指定消息,同GetMessageID一起使用
image(string)//图片地址转可拼接消息字符串
push()//同傻妞同名函数
notifyMasters(string)//通知管理员
sendText(string)//发送文本
sendImage(url)//发送图片
sendVideo(url)//发送视频


//=========web插件============

__request//请求
{
    ip()//客户端ip,有反代时为反代地址
    originalUrl()//请求url
    query(name)//获取请求参数
    body()//获取请求体
    json()//等于JSON.parse(body()),无法解析时返回null
    postForm(name)//获取表单数据
    postForms()//获取所有表单数据
    header(name)//获取header
    headers()//获取所有header
    method()//获取请求方法
    cookie(name)//获取cookie
}
__response//响应
{
    send()//发送响应结果,可以为字符串或者对象
	sendStatus()//设置http状态码
	json()//同send
	header()//设置响应头
	render(name,data)//使用指定模板渲染
	redirect(path,status)//重定向到指定路径,status为可选参数
	status(status)//设置http响应状态码并返回自己,方便链式调用,如__response.status(401).send("非法请求")
	setCookie(name,path,time)//path与time为可选,path默认值为插件根路径,time为ck有效期,单位:秒,默认一个月
	isComplete()//响应是否已经处理
	getStatus()//现在设置的http响应状态码
}
//以下无注释与js聊天插件相同
Logger()
console()
SillyGirl()
sillyGirl
require()
request()
fetch()//同request
importJs()
importDir()


