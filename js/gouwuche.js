
   danjia()
function danjia(){
var span1=document.getElementById('span1')
var span2=document.getElementById('span2')
var span3=document.getElementById('span3')
var xiaoji=document.getElementById('xiaoji')
var danjia=document.getElementById('danjia')
var zongji=document.getElementById('zongji')
var shangpinzongjia=document.getElementById('shangpinzongjia')
	var html=span2.innerHTML;
	var qqq=danjia.innerHTML;
	xiaoji.innerHTML=html*qqq;
	zongji.innerHTML='￥'+(qqq*html);
	shangpinzongjia.innerHTML='￥'+(qqq*html);
	span1.onclick=function(){
	html--;
	if(html==0){
		html=10;
		span2.innerHTML=html
		
	}
	else{
		span2.innerHTML=html
	}
	xiaoji.innerHTML=html*qqq;
	zongji.innerHTML='￥'+(qqq*html);
	shangpinzongjia.innerHTML='￥'+(qqq*html);
}

span3.onclick=function(){
	html++
	span2.innerHTML=html
	if(html==11){
		html=1;
		span2.innerHTML=html
	}
	else{
		span2.innerHTML=html
	}
	xiaoji.innerHTML=html*qqq;
	zongji.innerHTML='￥'+(qqq*html);
	shangpinzongjia.innerHTML='￥'+(qqq*html);
}
}

/*购物车倒计时时间*/

var date = new Date('February 10,2018 00:00:00');
	setInterval(function(){
		var nowDate = new Date();
		var num = Math.floor((date.getTime() - nowDate.getTime())/1000);
		var iH = Math.floor(num / 3600);
		var iM = Math.floor(num % 86400 % 3600 / 60);
		var iS = Math.floor(num % 60);
		daojishi.innerHTML =iH + '小时' +  iM + '分钟' +  iS + '秒';
	});