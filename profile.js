function colorSubmit(evt){
    evt.preventDefault()
    alert('Blue')
}

function placeSubmit(evt){
    evt.preventDefault()
    alert('Home')
}

function ritualSubmit(evt){
    evt.preventDefault()
    alert('Playing games after class')
}

let color = document.getElementById('color')
let place = document.getElementById('place')
let ritual = document.getElementById('ritual')

color.addEventListener('click', colorSubmit)
place.addEventListener('click', placeSubmit)
ritual.addEventListener('click', ritualSubmit)