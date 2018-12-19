var myHeading = document.querySelector('h1');
myHeading.textContent = "kurapika";
var myImg = document.querySelector("img");
myImg.onclick = function(){
	var imgSrc = myImg.getAttribute("src");
	if(imgSrc == "images/kurapika.jpg"){
		myImg.setAttribute("src","images/qiya.jpg");
	}else{
		myImg.setAttribute("src","images/kurapika.jpg");
	}
}
var setUserName = function(){
	var myName = prompt("please enter your name");
	localStorage.setItem = ("name",myName);
	myHeading.textContent = myName + " is a cool gay";
}

if(!localStorage.getItem("name")){
	setUserName();
}else{
	var myName = localStorage.getItem("name");
	myHeading.textContent = myName +" is a cool boy";
}
var button = document.querySelector("button")
button.onclick = setUserName;