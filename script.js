//awal bar navigasi
const navbar = document.querySelector('.navbar');
const qa = document.querySelector('.qa');

navbar.addEventListener('click', function(event) {
	console.log(event.target);

	if(event.target.className == "hammenu"){
		qa.classList.toggle('show');
	}
});


// akhir bar navigasi
