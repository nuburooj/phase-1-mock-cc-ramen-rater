// write your code here

// create variables for element attributes for easy access
const ramenDetailDiv = document.getElementById('ramen-detail')
const restaurant = document.querySelector(".restaurant")
const image = document.querySelector('.detail-image')
//console.log(image)
const rating = document.getElementById('rating-display')
const comment = document.querySelector('#comment-display')
const name = document.querySelector('.name')



//1. See all ramen images in the div with the id of ramen-menu

//grab ramen menu to put ramen into
const ramenMenu = document.getElementById('ramen-menu')

//show details
const showDetails = (ramen) => {
    //console.log(ramen)
    name.textContent = ramen.name
    restaurant.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    image.src = ramen.image
    //console.log(image)
    comment.textContent = ramen.comment
}

// grab data from url
const url = "http://localhost:3000/ramens"
const ramenUrl = url + '/:id'

fetch(url)
.then(res => res.json())
.then(ramens => {
    ramens.forEach((ramen) => {
        // create html element
        let ramenImage = document.createElement('img')
        // set attribute
        ramenImage.src = ramen.image
        // put it on the page
        ramenMenu.append(ramenImage)
        ramenImage.addEventListener('click', () => {
            console.log(ramen.name)
        })

    })
    showDetails(ramens[0])
})



