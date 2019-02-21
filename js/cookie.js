//保存cookie
//参数：键 值 有效天数
//返回值：无
function saveCookie(key,value,daycount){
	var d = new Date();
	d.setDate(d.getDate()+daycount);
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
	//键和值(escape主要针对于中文编码)以及有效时间
}
//获取cookie
//参数：键
//返回值：值
function getCookie(key){
	var str = unescape(document.cookie);//将cookie转为百分号编码
	var arr = str.split("; ");//用分隔符将cookie分割为一个数组
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){//遍历数组并检索出key=
			return arr[i].split("=")[1];//再次用分隔符将value取出来
		}
	}
	return null;
}
//删除cookie
//参数：键
//返回值:无
function delCookie(key){
	saveCookie(key,'',-1);
}
