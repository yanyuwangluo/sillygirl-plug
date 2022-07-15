// [rule: 扭吧]

var url = "https://www.nihaowua.com/v/video.php"
var red = request({
        url: url,
        dataType: "location",
    })
	
    sendVideo(red)
	