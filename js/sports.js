//匀速运动
//参数：
//domobj对象 样式属性 起始值 终点值 方向 步长 时间间隔
//返回值：无
function sportsYun(domobj,styleAtrr,startValue,endValue,direction,step,timeSpace){
	let value = startValue;
	let num = setInterval(()=>{
		value = value+direction*step;
		if(direction>0?value>=endValue:value<=endValue){
			value = endValue;
			window.clearInterval(num);
		}
		if(styleAtrr=="opacity"){
			domobj.style[styleAtrr] = value;
		}else{
			domobj.style[styleAtrr] = value+"px";
		}
	},timeSpace)
}
//匀速运动
//参数：
//domobj对象 样式属性 终点值 时长
//返回值：无
function sportsMove(domobj,styleAtrr,endValue,timelong){
	let startValue =parseFloat(getStyle(domobj,styleAtrr));
	let direction = startValue>endValue?-1:1;
	let timeSpace = 10;
	//步长=(起-终)/总步数 总步数 = 时长/时间间隔
	let step = Math.abs(startValue-endValue)/(timelong/timeSpace);
	sportsYun(domobj,styleAtrr,startValue,endValue,direction,step,timeSpace)
}
//淡入淡出
//参数：淡出的图 淡入的图 时长
function fadeInOut(inImg,outImg,timelong){
	var startValue =1;
	var endValue = 0
	var direction = -1;
	var timeSpace = 10;
	//步长=(起-终)/总步数 总步数 = 时长/时间间隔
	var step = Math.abs(startValue-endValue)/(timelong/timeSpace);
	var value = startValue;
	var num = setInterval(()=>{
		value = value+direction*step;
		if(value<=endValue){
			value = endValue;
			window.clearInterval(num);
		}
		outImg.style.opacity = value;
		inImg.style.opacity = (1-value);
	},timeSpace)
}
