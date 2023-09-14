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
  // remove all active classes
ratingNumbers.forEach(rating=> rating.classList.remove('active'))
// add active class on selected rating
event.target.classList.add('active')
// set rating value
selectedRating = event.target.value
}

// handle submit action
function handleSubmit(){
  // check is a rating is selected
    if(selectedRating <= 0){
        alert('Please Select a rating')
        return;
    }
    // toggle active card component 
    container.firstElementChild.classList.toggle('active')
    container.lastElementChild.classList.toggle('active')
    // add seleted rating value to html text
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

// listen to click on rating numbers
ratingContainer.addEventListener('click',setActiveRating)
// listen to click on submit button
button.addEventListener('click',handleSubmit)

