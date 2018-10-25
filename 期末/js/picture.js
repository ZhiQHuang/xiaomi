//图片轮播效果
var sign=2; //用于标示当前轮播到第几副图
//显示轮播图片
function showPic(index){
	var focusImg = document.getElementById("focusImg");
	var imgSrc = "images/pic"; //图片保存的路径
	imgSrc = imgSrc+index+".jpg";
	//更换轮播图片
	focusImg.src = imgSrc;
	//获取原点列表
	var lis = document.getElementsByClassName("focusBox")[0].getElementsByTagName("li");
	//移除所有轮播按钮样式
	for(var i=0;i<lis.length;i++){
		lis[i].className="";
	}
	//设置轮播按钮样式
	lis[index-1].className="cur";
}

//处理轮播图片
function setCurrentPic(){
	showPic(sign);
	sign++;
	if(sign==8){
		sign=1;
	}
}

//窗体加载完成时显示指定的图片
window.onload=function(){
	showPic(1);
}

//设置定时器
window.setInterval("setCurrentPic()",2000);
