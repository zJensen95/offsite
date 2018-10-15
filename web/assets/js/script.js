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