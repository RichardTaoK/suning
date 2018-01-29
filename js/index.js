
window.onload=function(){
//banner
	let bannerbox=document.querySelector('.ban_tu');
	let banner=document.querySelectorAll('.ban_tu a.img');
	let dian=document.querySelectorAll('.ban_tu .dian li');
	let rightbtn=document.querySelector('.ban_tu .right')
	let leftbtn=document.querySelector('.ban_tu .left')

	let n=0;
	function move(){
		n++;
		if(n>=banner.length){n=0;}
		banner.forEach(function(value,index){
			value.classList.remove('active');
			dian[index].classList.remove('active');
		})
		banner[n].classList.add('active');
		dian[n].classList.add('active');
	}
	let t=setInterval(move,2000);
	bannerbox.onmousemove=function(){
		clearInterval(t);
	}
	bannerbox.onmouseout=function(){
		t=setInterval(move,2000);
	}
	rightbtn.onclick=function(){
		move();
	}
	leftbtn.onclick=function(){
		n--;
		if(n<0){n=banner.length-1;}
		banner.forEach(function(value,index){
			value.classList.remove('active');
			dian[index].classList.remove('active');
		})
		banner[n].classList.add('active');
		dian[n].classList.add('active');
	}
	dian.forEach(function(val,index){
		val.onclick=function(){
			
			dian.forEach(function(v,i){
				console.log(1);
				v.classList.remove('active');
				banner[i].classList.remove('active');
			})
			this.classList.add('active');
			banner[index].classList.add('active');
			n=index;
		}
	})
	
// 选项卡 
	let xuan=document.querySelectorAll('.ju_tab .tab1');
	// console.log(xuan);
	let dui=document.querySelectorAll('.p_b ul');
	xuan.forEach(function(value,index){
		value.onclick=function(){
			xuan.forEach(function(v,i){
				v.classList.remove('hong');
				dui[i].classList.remove('appear');
			})
			this.classList.add('hong');
			dui[index].classList.add('appear');

		}
	})


// 小banner
	let xia=document.querySelectorAll('li.li3 .xia_r');
	let left3=document.querySelector('li.li3 .left');
	let right3=document.querySelector('li.li3 .right');
	let n2=0;
	function move1(){
		n2++;
		if(n2>=xia.length){n2=0;}
		xia.forEach(function(value,index){
			value.classList.remove('xian');
		})
		xia[n2].classList.add('xian');
	}
	right3.onclick=function(){
		move1();
	}
	left3.onclick=function(){
		n2--;
		if(n2<0){n2=xia.length-1;}
		xia.forEach(function(value,index){
			value.classList.remove('xian');
		})
		xia[n2].classList.add('xian');
	}
}