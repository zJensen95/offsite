function openDrop(e) {
	
	if ( e.classList.contains('is-open') ) {
		
		e.classList.remove('is-open');
		
	} else {
		
		e.classList.add('is-open');
		
	}
	
}

var dropdowns = document.getElementsByClassName('dropdown');
console.log(dropdowns);
for ( var i = 0; dropdowns.length > i; i ++) {

	dropdowns[i].addEventListener('click', function() {
		
		openDrop(this);
		
	});
	
}

var menu = document.getElementById('menu');
function menuOpenClose() {
	
	if (menu.classList.contains('is-open')) {
		
		menu.classList.remove('is-open');
		
	} else {
		
		menu.classList.add('is-open');
		
	}
	
}

document.getElementById("hamburger").addEventListener("click",  function() {
	menuOpenClose();
});