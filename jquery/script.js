
// block of JavaScript that will run the anonymous callback
// method after the DOM is loaded
$(document).ready(function () {
	 manipulateDOM();
});

function manipulateDOM() {

	var h1Headers = $('h1');
	h1Headers.text('Hello World');

	var h3Headers = $('h3');

	// set the foreground color of the elements to a shade of green
	h3Headers.css('color', '#37887D');
	// add a strike-through line to the first element in the list
	h3Headers.first().css('text-decoration', 'line-through');
	// get the last h3 header in the DOM
	var lastH3Header = $('h3:last');
	// set the background color of the element to a shade of purple
	lastH3Header.css('background-color', '#53226A');    
}