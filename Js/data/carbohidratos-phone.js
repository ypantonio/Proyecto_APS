// en esta sección se agrega los objetos de la base de datos
// YASMIN ANTONIO
export function funciones(){
const imag = document.querySelector(".phimagen")
const collection = document.querySelectorAll(".ali")
const btnback = document.querySelector(".back")
const btnext = document.querySelector(".next")

btnback.addEventListener("click", prevSlide)
btnext.addEventListener("click", nextSlide)

// Utility vars
let index = 0

// Set interval
let interval = setInterval(startInterval, 2000)

function startInterval() {
    index++
    moveCarousel()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(startInterval, 500)
}

function moveCarousel() {
    // Last image
    if (index > collection.length -1) {
        index = 0
    } else if (index < 0) {
        index = collection.length -1
    }

    imag.style.transform = `translateX(-${index * 800}px)`
}

// Nav buttons
function prevSlide() {
    index--
    //resetInterval()
    clearInterval(interval) 
    moveCarousel()
}

function nextSlide() {
    index++
    //resetInterval()
    clearInterval(interval) 
    moveCarousel()
}
}