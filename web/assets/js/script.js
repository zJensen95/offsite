$(function() {
	
	$('#calendar').fullCalendar({
		header: {
			left: 'prev',
			center: 'title',
			right: 'next'
		},

		showNonCurrentDates: false,
		fixedWeekCount: false,
		columnHeader: false,
		
		events: [
			{
				title: 'Test',
				start: '2018-10-11T8:00:00',
				end: '2018-10-11T12:00:00'
			},
			{
				title: 'Test One',
				start: '2018-10-25T12:00:00',
				end: '2018-10-25T14:00:00'
			},
			{
				title: 'Test Two',
				start: '2018-10-25T15:00:00',
				end: '2018-10-25T17:00:00'
			}
		]
	})
	
	$("#day").fullCalendar({
		defaultView: 'listDay',
		header: {
			left: '',
			center: 'title',
			right: ''
		},
		events: [
			{
				title: 'Test',
				start: '2018-10-11'
			},
			{
				title: 'Test One',
				start: '2018-10-25T12:00:00',
				end: '2018-10-25T14:00:00'
			},
			{
				title: 'Test Two',
				start: '2018-10-25T15:00:00',
				end: '2018-10-25T17:00:00'
			}
		]
	})
	
}); 

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

function bookingChoose($this) {
	
	var active = document.getElementsByClassName('is-active');
	$(active).each(function() {
		this.classList.remove("is-active");
	});
	
	$this.classList.add("is-active");
	
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