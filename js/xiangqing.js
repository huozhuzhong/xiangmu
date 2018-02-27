//放大镜
var faj1=document.getElementById('xq-box2-r1-faj1')
var faj2=document.getElementById('xq-box2-r1-faj2')
var faj1Img=faj1.getElementsByTagName('img')
var faj2Img=faj2.getElementsByTagName('img')
var faj3=document.getElementById('xq-box2-r1-faj3')
var faj3Img=faj3.getElementsByTagName('img')[0]
var faj1_span=faj1.getElementsByTagName('span')[0];
for(var i=0;i<faj2Img.length;i++){
     	faj2Img[i].index=i
	faj2Img[i].onclick=function(){
		for(var j=0;j<faj1Img.length;j++){
			faj1Img[j].style.zIndex=0;
		}
		faj1Img[this.index].style.zIndex=5;
	}
}
faj1.onmouseover = function(){
		faj1_span.style.display = 'block';
		faj3.style.display = 'block';
		posLeft(faj1_span)
	};
	faj1.onmouseout = function(){
		faj1_span.style.display = 'none';
		faj3.style.display = 'none';
	};
	faj1.onmousemove = function(ev){

		var L = ev.pageX - faj1_span.offsetWidth/2;
		var T = ev.pageY - faj1_span.offsetHeight/2;

		if(L<0){
			L = 0;
		}
		else if(L>faj1.offsetWidth - faj1_span.offsetWidth){
			L = faj1.offsetWidth - faj1_span.offsetWidth;
		}

		if(T<0){
			T = 0;
		}
		else if(T>faj1.offsetHeight - faj1_span.offsetHeight){
			T = faj1.offsetHeight - faj1_span.offsetHeight;
		}
		faj1_span.style.left = L+ 'px';
		faj1_span.style.top = T + 'px';
		var scaleX = L / (faj1.offsetWidth - faj1_span.offsetWidth);
		var scaleY = T / (faj1.offsetHeight - faj1_span.offsetHeight);
		faj3Img.style.left = - scaleX * (faj3Img.offsetWidth - faj3.offsetWidth) + 'px';
		faj3Img.style.top = - scaleY * (faj3Img.offsetHeight - faj3.offsetHeight) + 'px';
	};

function posLeft(elem){
		var result = 0;
		while(elem){
			result += elem.offsetLeft;
			elem = elem.offsetParent;
		}
		return result;
	}

//    时间倒计时
	var date = new Date(' February 5,2018 00:00:00');

	setInterval(function(){
		var nowDate = new Date();
		var num = Math.floor((date.getTime() - nowDate.getTime())/1000);
		var iD = Math.floor(num / 86400);
		var iH = Math.floor(num % 86400 / 3600);
		var iM = Math.floor(num % 86400 % 3600 / 60);
		var iS = Math.floor(num % 60);
		shijian.innerHTML = '距离结束还有：' + iD + '天' +  iH + '小时' +  iM + '分钟' +  iS + '秒';
		//time.innerHTML = '距离元旦还有：' + num + '秒';

	});	
//数量加减

var jian=document.getElementById('jian')
var shu=document.getElementById('shu')
var jia=document.getElementById('jia')

jian.onclick=function(){
	var num=shu.innerHTML;
	if(num==1){
		num=191;
		shu.innerHTML=num-1;
	}
	else{
		shu.innerHTML=num-1;
	}
}
jia.onclick=function(){
	var num=shu.innerHTML;
	if(num==190){
		num=1;
		shu.innerHTML=num;
	}
	else{
		num++;
		shu.innerHTML=num;
	}
}
















