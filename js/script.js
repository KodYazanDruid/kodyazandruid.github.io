// Select all elements with class name 'stars'
const stars = document.querySelectorAll('.stars');

// Loop through each element and add a new class name 'star-rate-5'
stars.forEach(star => {
  let rand = Math.floor(Math.random() * 5) + 1;
  star.classList.add('star-rate-' + rand);
});

// Carousel

/* const slides = [
  'Wishing you health, wealth, and happiness in the New Year ahead.',
  'I hope all your dreams come true in 2021 — onwards and upwards!',
  'Wave goodbye to the old and embrace the new with hope, dreams, and ambition. Wishing you a Happy New Year full of happiness!',
  'May the 12 months of the New Year be full of new achievements for you. May the days be filled with eternal happiness for you and your family!',
  'Don’t forget the past, learn from it and go out strong for your dreams and future. My best wishes are with you.',
  'Wishing for a better year with new opportunities and beautiful moments. Let’s have a great year ahead.',
  'Years will come and go, but my love for you will always be the same. It will never stop to grow as long as there is a tomorrow.',
  'When I think of you, my heart overflows with joy and pleasure. I have fallen more in love with you every year. This new year will not be an exception.',
  'We are blessed to have each other, I could not be any more thankful. May this year bring us success and good health.'
] */

const carouselText = document.getElementsByClassName('carousel-item')
const carouselNext = document.getElementById('carousel-next');
const carouselPrev = document.getElementById('carousel-prev');

let index = 0;

carouselNext.addEventListener('click', () => {
  carouselText[index].classList.remove('item-active');
  index += 1;
  if(index >= carouselText.length) {
    index = 0;
  }
  updateCarousel(index);
})

carouselPrev.addEventListener('click', () => {
  carouselText[index].classList.remove('item-active');
  index -= 1;
  if(index < 0) {
    index = carouselText.length - 1;
  }
  updateCarousel(index);
})

function updateCarousel(index) {
  console.log(carouselText);
  carouselText[index].classList.add('item-active');
}



const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelectorAll('#navbar a');

navbarToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  console.log('clicked');
});
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
})

const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
  logo.style.transform = "scale(1.2)";
  setTimeout(() => {
    logo.style.transform = "scale(1)";
  }, 600);
});