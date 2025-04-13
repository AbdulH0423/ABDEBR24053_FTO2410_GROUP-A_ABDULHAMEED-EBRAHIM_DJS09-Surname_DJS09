// Code Tidy

import { showReviewTotal, populateUser, showDetails, getTopTwoReviews} from './utils'
import { Permissions , LoyaltyUser } from './enums'
import { Review, Property } from './interfaces'
import MainProperty from './classes' 
const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

let isLoggedIn: boolean

// Reviews
const reviews: Review[] = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
]

const you = {
    firstName: 'Zain',
    lastName: 'Ebrahim',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 27,
    stayedAt: ['Capetown-home', 'JHB-flat', 'Sabie-bungalow']
}

// Array of Properties
const properties : Property[] = [
    {
        image: 'images/Durban-bungalow.jpg',
        title: 'Durban Bungalow',
        price: 625 ,
        location: {
            firstLine: '411 Main Street',
            city: 'Ballito',
            code: 4420,
            country: 'South Africa'
        },
        contact: [+27312556418, 'durban@couchsurfer.com'],
        isAvailable: true  
    },
    {
        image: 'images/George-beach-house.avif',
        title: 'George Beach House',
        price: 800,
        location: {
            firstLine: '23 Beach Road',
            city: 'George',
            code: 6530,
            country: 'South Africa'
        },
        contact: [+27446112358, 'george@couchsurfer.com'],
        isAvailable: false 
    },
    {
        image: 'images/JHB-penthouse.jpg',
        title: 'JHB penthouse',
        price: 493,
        location: {
            firstLine: '601 The Glades, 441 Sandton Drive',
            city: 'Sandton',
            code: 2196,
            country: 'South Africa',
        },
        contact: [+27117923847, 'sandton@couchsurfer.com'],
        isAvailable: true
    },
    {
        image: 'images/Winelands-villa.jpeg',
        title: 'Winelands Villa',
        price: 926,
        location: {
            firstLine: '212 Merlot Street',
            city: 'Stellenbosch',
            code: 7600 ,
            country: 'South Africa'
        },
        contact: [ +27214429800, 'stellies@couchsurfer.com'],
        isAvailable: false
    }
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer.appendChild(card)
}

let count = 0
function addReviews(array : Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

const now = new Date()
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

let currentLocation : [string, string, number] = ["Johannesburg", `${timeString}`, 14]
footer.innerHTML = `${currentLocation[0]}  ${currentLocation[1]} ${currentLocation[2]} °`


let yourMainProperty = new MainProperty(
    'images/knysna-houseboat.avif', 
    'Kysna Houseboat',
    [{
        name: 'Ameera',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '09-04-2025'
    }] )

const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)