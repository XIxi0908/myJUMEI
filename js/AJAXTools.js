//功能：发送ajax请求 获取数据
//参数：请求方式 url 参数 是否异步 回调函数
function ajax(method,url,param,isAsync,func) {
	let xhr = new XMLHttpRequest();
	let urlandParam = url;
	if(method.toLowerCase()=="get"){
		urlAndParam += "?"+param;
	}
	xhr.open(method,urlAndParam,isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			func(xhr.responseText);
		}
	}
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
		xhr.send(param);
	}else{
		xhr.send();
	}
}
//用对象的方法并且设有默认值
function ajaxByObj(obj){
	let defaultObj = {
		"method":"get",
		"url":"#",
		"param":"",
		"isAsync":true,
		"func":null
	}
	for(let key in defaultObj){
		if(!obj[key]){
			obj[key]=defaultObj[key];
		}
	}
	let xhr = new XMLHttpRequest();
	let urlAndParam = obj.url;
	if(obj.method.toLowerCase()=="get"){
		urlAndParam += "?"+obj.param;
	}
	xhr.open(obj.method,urlAndParam,obj.isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			obj.func&&obj.func(xhr.responseText);
		}
	}
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
		xhr.send(obj.param);
	}else{
		xhr.send();
	}
}
//
function ajaxByObjAndPromise(obj){
	let defaultObj = {
		"method":"get",
		"url":"#",
		"param":"",
		"isAsync":true,
		// "func":null
	}
	for(let key in defaultObj){
		if(!obj[key]){
			obj[key]=defaultObj[key];
		}
	}
	let xhr = new XMLHttpRequest();
	let urlAndParam = obj.url;
	if(obj.method.toLowerCase()=="get"){
		urlAndParam += "?"+obj.param;
	}
	xhr.open(obj.method,urlAndParam,obj.isAsync);
	let p = new Promise(function(resolve,reject){
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				// obj.func&&obj.func(xhr.responseText);
				resolve&&resolve(xhr.responseText);
				return;
			}
			reject&&reject(xhr.status);
		}
	})
	
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
		xhr.send(obj.param);
	}else{
		xhr.send();
	}
}