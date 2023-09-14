// select all interactive elements
const container =document.querySelector('.container')
const button = document.querySelector('.submit');
const ratingContainer = document.querySelector('.rating-numbers')
const ratingNumbers = document.querySelectorAll('.rating-numbers li')
const displayRating = document.querySelector('.selected-rating span')
let selectedRating=0

// Define functions

// set active rating
function setActiveRating(){
ratingNumbers.forEach(rating=> rating.classList.remove('active'))
event.target.classList.add('active')
selectedRating = event.target.value
// console.log(selectedRating );
}

// handle submit action
function handleSubmit(){
    if(selectedRating <= 0){
        alert('Please Select a rating')
        return;
    }
    container.firstElementChild.classList.toggle('active')
    container.lastElementChild.classList.toggle('active')
    displayRating.innerHTML = selectedRating
    // setTimeout( handleReset,6000)
}

function handleReset(){
  ratingNumbers.forEach(rating=> rating.classList.remove('active'))
  selectedRating=0
  container.firstElementChild.classList.toggle('active')
  container.lastElementChild.classList.toggle('active') 
}


// Add event listiners
ratingContainer.addEventListener('click',setActiveRating)
button.addEventListener('click',handleSubmit)

