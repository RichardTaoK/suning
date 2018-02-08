
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

//楼层跳转 
	let back=document.querySelector('aside .back');
	back.onclick=function(){
		animate(document.body,{scrollTop:0}, 500);
		animate(document.documentElement,{scrollTop:0}, 500);
	}
	let ch=document.documentElement.clientHeight;
	let nav=document.querySelector('aside');
	nav.style.display="none";
	let flag1=true;
	let flag2=true;
	let flag3=true;
	window.onscroll=function(){
		if(!flag3){return;}
		let fls=document.querySelectorAll('.fl');
		let navli=document.querySelectorAll('aside li');
		let tops=document.body.scrollTop? document.body.scrollTop:document.documentElement.scrollTop;
		let lw=fls[0].offsetTop;
		let sou=document.querySelector('.sousou');
		if(tops>lw-200){
			nav.style.display="block";
		}else{
			nav.style.display="none";
		}
		if(tops>ch*2){
			if(flag1){
				flag1=false;
				animate(sou,{top:0}, 500,function(){
					flag2=false;
				})
			}
		}else{
			if(!flag2){
				flag2=true;
				animate(sou,{top:-50}, 500,function(){flag1=true})
			}
		}
		fls.forEach(function(value,index){
			if(tops>value.offsetTop-ch+200){
				navli.forEach(function(v,i){
					v.classList.remove('active');
				})
				navli[index].classList.add('active');
			}
		})
		navli.forEach(function(value,index){
			// let a=fls[index].offsetTop;
			value.onclick=function(){
				flag3=false;
				animate(document.body,{scrollTop:fls[index].offsetTop}, 600,function(){flag3=true})
				animate(document.documentElement,{scrollTop:fls[index].offsetTop}, 600,function(){flag3=true})
				navli.forEach(function(v,i){
					v.classList.remove('active');
				})
				value.classList.add('active');
			}
		})
	}
// banner选择卡
	let lili=document.querySelectorAll('.banner .left li');
	let zizi=document.querySelectorAll('.banner .left .zi div');
	lili.forEach(function(value,index1){
		value.onmouseover=function(){
			zizi.forEach(function(v,i){
				v.classList.remove('active');
			})
			zizi[index1].classList.add('active');
		}
	})

	let fu=document.querySelectorAll('header .fu');
	let xian=document.querySelectorAll('header .xian');
	fu.forEach(function(value,index){
		value.onmousemove=function(){
			xian.forEach(function(v,i){
				animate(v,{height:0}, 200);
			})
			if(index==fu.length-1){
				animate(xian[index],{height:224}, 200);

			}else{
				animate(xian[index],{height:124}, 200);
			}
		}
		value.onmouseout=function(){
			animate(xian[index],{height:0}, 200);

		}
	})
// 节点轮播
	let small=document.querySelector('.small ul');
	let smlist=document.querySelectorAll('.small ul li');
	let left=document.querySelector('.small .left'); 
	let right=document.querySelector('.small .right');
	let w=small.parentNode.offsetWidth; 
	let vadios=document.querySelectorAll('.pindao .shiping a');
	function am(){
		animate(small,{left:-w}, 1000,function(){
			// let i=0;
			for(let i=0;i<3;i++){
				let first=small.firstElementChild;
				small.appendChild(first);
			}
				small.style.left=0;

		})
	}
	right.onclick=function(){
		am();
		
	}
	smlist.forEach(function(value,index){
		value.onmousemove=function(){
			vadios.forEach(function(v,i){
				v.classList.remove('active');
			})
			vadios[index].classList.add('active');
		}
	})
	left.onclick=function(){
		small.style.left=-w+'px';
		for(let i=0;i<3;i++){
			let first=small.firstElementChild;
			let last=small.lastChild;
			small.insertBefore(last, first);
			
		}
		animate(small,{left:0}, 1000)
	}
}