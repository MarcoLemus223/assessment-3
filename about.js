console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form was submited successfully')
}

function catAlert(evt){
	evt.preventDefault()
	alert('Looking Good')
}


let form = document.querySelector('#contact');
let cat = document.getElementById('cat')

form.addEventListener('click', handleSubmit);
cat.addEventListener('mouseover', catAlert)

