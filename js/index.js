	/*第一个轮播图*/
	var box3All1 = document.getElementById('box3-all1');
	var list = document.getElementById('list');
	var listLi = list.getElementsByTagName('li');	
	var btn = document.getElementById('btn');
	var btnLi = btn.getElementsByTagName('li');	
	var num = 0;
	var timer;

	for(var i=0;i<btnLi.length;i++){

		btnLi[i].index = i;

		btnLi[i].onclick = function(){
			for(var i=0;i<btnLi.length;i++){
				btnLi[i].className = '';
			}
			this.className = 'active';
			list.style.left = - this.index * 900 + 'px';
			num = this.index;
		};
	}
	box3All1.onmouseover = function(){
		clearInterval(timer);
	};
	box3All1.onmouseout = function(){
		timer = setInterval(run,3000);
	};
	timer = setInterval(run,3000);
	function run(){
		for(var i=0;i<btnLi.length;i++){
			btnLi[i].className = '';
		}
		if(num == btnLi.length-1){
			num = 0;
		}
		else{
			num++;	
		}
		btnLi[num].className = 'active';
		list.style.left = - num * 900 + 'px';
	}
	/*第二个轮播图*/
var left = document.getElementById('left');
var right = document.getElementById('right')
var lunbo = document.getElementById('lunbo')
var foo=1;
    left.onclick = function(){
    	
    	if(foo==6){
    		foo=1;
    	lunbo.style.left=-(foo*300)+'px'
    	}
    	else{
    		lunbo.style.left=-(foo*300)+'px'
    	}
    	foo++;
    	console.log(foo)
    }
    right.onclick = function(){
    	if(foo==0){
    		foo=6;
    		lunbo.style.left=-(foo*300)+'px';
    	}
    	else{
    		lunbo.style.left=-(foo*300)+'px';
    	}
    	foo--
    	console.log(foo)
    }
    
  
/*时间*/
var date = new Date('February 8,2018 00:00:00');
// var date = new Date('February 16,2018 00:00:00');	
	setInterval(function(){
		var nowDate = new Date();
		var num = Math.floor((date.getTime() - nowDate.getTime())/1000);
		var iD = Math.floor(num / 86400);
		var iH = Math.floor(num % 86400 / 3600);
		var iM = Math.floor(num % 86400 % 3600 / 60);
		var iS = Math.floor(num % 60);
		aa_shijian.innerHTML = '结束：' + iD + '天' +  iH + '小时' +  iM + '分钟' +  iS + '秒';	
	});

/*开团时间*/

setInterval(function(){
		var nowDate = new Date();
		var num = Math.floor((date.getTime() - nowDate.getTime())/1000);
		var iD = Math.floor(num / 86400);
		var iH = Math.floor(num % 86400 / 3600);
		var iM = Math.floor(num % 86400 % 3600 / 60);
		var iS = Math.floor(num % 60);
		kaituan_shijian.innerHTML = '开团时间：' + iD + '天' +  iH + '小时' +  iM + '分钟' +  iS + '秒';
		
	});