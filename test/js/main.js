function cr() {
	document.cookie = "login = undefined";
}

function wu() {
	alert("无此功能")
}

function pic_show() {
	var rand = Math.floor(Math.random() * 2)
	console.log(rand)
	var picsrc = [];
	picsrc[0] = "img/0.jpg";
	picsrc[1] = "img/1.jpg";
	document.write("<img src=img/" + rand + ".jpg>")
}
