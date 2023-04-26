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
  if (index >= carouselText.length) {
    index = 0;
  }
  updateCarousel(index);
})

carouselPrev.addEventListener('click', () => {
  carouselText[index].classList.remove('item-active');
  index -= 1;
  if (index < 0) {
    index = carouselText.length - 1;
  }
  updateCarousel(index);
})

function updateCarousel(index) {
  console.log(carouselText);
  carouselText[index].classList.add('item-active');
}

// Navbar dropdown
const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelectorAll('#navbar a');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('menu-open');
  navbar.classList.toggle('active');
  console.log('clicked');
});
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
})

// Logo animation
const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
  logo.style.transform = "scale(1.2)";
  setTimeout(() => {
    logo.style.transform = "scale(1)";
  }, 600);
});

// Customer hover
const customers = document.getElementsByClassName('customer')
const r = Math.floor(Math.random() * 5) + 1
for (let i of customers) {
  i.addEventListener('mouseover', () => {
    i.style.rotate = (Math.floor(Math.random() * 10) - 5) + 'deg';
  })
  i.addEventListener('mouseout', () => {
    i.style.rotate = '0deg';
  })
}

// Cat content changer
const photos = document.getElementById('cat-photos-btn')
const videos = document.getElementById('cat-videos-btn')
const catPhotos = document.getElementById('cat-photos')
const catVideos = document.getElementById('cat-videos')

photos.addEventListener('click', () => {
  if (photos.classList.contains('cat-content-active')) { return }
  videos.classList.remove('cat-content-active')
  photos.classList.add('cat-content-active')

  catPhotos.classList.remove('cat-gallery-display-none')
  catVideos.classList.add('cat-gallery-display-none')
})
videos.addEventListener('click', () => {
  if (videos.classList.contains('cat-content-active')) { return }
  photos.classList.remove('cat-content-active')
  videos.classList.add('cat-content-active')

  catVideos.classList.remove('cat-gallery-display-none')
  catPhotos.classList.add('cat-gallery-display-none')
})

// Cat videos
const catVideoContainer = document.getElementById('cat-videos')
fetch('./assets/ytp_embed/ytp_raw_embed_links.txt')
  .then(response => response.text())
  .then(text => {
    const links = text.split('\n')
    for (let link of links){
      const video = document.createElement('iframe')
      video.src = link.match(/src="([^"]*)"/)[1]
      video.classList.add('embed-video')
      video.title = link.match(/title="([^"]*)"/)[1]
      video.allow = link.match(/allow="([^"]*)"/)[1]
      video.allowFullscreen = true
      catVideoContainer.appendChild(video)
    }
  })