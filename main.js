(function() {
	var div=document.getElementById('test'),
	    style=div.style;
	    div.className=" css-class  css-class-new ";
	    div.className=div.className.replace("css-class-new", "");
})();