var rectangleColor = '#0099ff';

// Detects mouse movement on the canvas to draw the rectangles.
function initDraw(canvas) {
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
    }

    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    var element = null;

    canvas.onmousemove = function (e) {
        setMousePosition(e);
        if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
    };

    canvas.onclick = function (e) {
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
        } else {
            mouse.startX = mouse.x;
            mouse.startY = mouse.y;
            element = document.createElement('div');
            element.className = 'rectangle';
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
			element.style.borderColor = rectangleColor;
            canvas.appendChild(element);
            canvas.style.cursor = "crosshair";
        }
    };
}


// Clear labels function to clear all labels from the canvas.
// Deletes each child of the canvas object individually using removeChild()
// Can be modified to remove just the most recent child, oldest child, etc.
function clearLabels() {
	var canv = document.getElementById('canvas');
	while (canv.firstChild) {
    	canv.removeChild(canv.firstChild);
	}
}


// Change the color of the rectangle depending on the item selected in the drop down.
function changeColor() {
	var value = document.getElementById('dropdown').value;
	if(value === 'one') {
		rectangleColor = '#0099ff'; //blue
	} else if(value === 'two') {
		rectangleColor = '#29a329'; //green
	} else if(value === 'three') { 
		rectangleColor = '#ffb3d9'; //pink
	} else if(value === 'four') {
		rectangleColor = '#ffa64d'; //orange
	} else if(value === 'five') {
		rectangleColor = '#ffff66'; //yellow
	}
	
}