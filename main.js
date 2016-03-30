(function() {
	var div=document.getElementById('test'),
	    style=div.style;
	   // div.className=" css-class  css-class-new ";
	    //div.className=div.className.replace("css-class-new", "");
	    div.classList.add('css-class');
	    div.classList.remove ('css-class');
	    div.classList.toggle('css-class');
})();