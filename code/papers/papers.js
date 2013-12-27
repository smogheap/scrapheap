var P = {
	docs: [
		{
			"color": "yellow",
			"content": "i am a document.",
			"width": "10%",
			"height": "10%"
		},
		{
			"color": "lightblue",
			"content": "i<br>am<br>a<br>tall<br>document."
		}
	],
	move: {
		doc: null,
		x: 0,
		y: 0
	}
};

function mousedown(event) {
	var doc = document.elementFromPoint(event.clientX, event.clientY);
	if(doc.className.split(" ").indexOf("doc") !== -1) {
		P.move.doc = doc;
		P.move.x = event.clientX - doc.offsetLeft;
		P.move.y = event.clientY - doc.offsetTop;
		window.addEventListener("mousemove", mousemove);
		window.addEventListener("mouseup", mouseup);
		document.body.appendChild(doc);  //move to "top"
	}
}
function mousemove(event) {
	P.move.doc.style.left = event.clientX - P.move.x;
	P.move.doc.style.top = event.clientY - P.move.y;
}
function mouseup(event) {
	window.removeEventListener("mousemove", mousemove);
	window.removeEventListener("mouseup", mouseup);
}

window.addEventListener("load", function () {
	var doc = null;
	for(i in P.docs) {
		data = P.docs[i];
		doc = document.createElement("div");
		doc.className = "doc";
		doc.style.backgroundColor = data.color;
		doc.style.width = data.width;
		doc.style.height = data.height;
		doc.style.userSelect = "none";
		//doc.textContent = data.content;
		doc.innerHTML = data.content
		P.docs[i].dom = doc;

		document.body.appendChild(doc);
	}
});
window.addEventListener("mousedown", mousedown);
