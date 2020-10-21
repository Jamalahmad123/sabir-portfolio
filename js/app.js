// Navbar UI
const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close-btn');
// Fixed navbar on scroll
window.addEventListener('scroll', function() {
  if(window.pageYOffset > 80) {
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar');
  }
});
// End fixed navbar

//open sidebar
hamburger.addEventListener('click', function() {
  sidebar.classList.add('show-sidebar');
});

// Close sidebar
closeNav.addEventListener('click', function() {
  sidebar.classList.remove('show-sidebar');
});


// Start Work Section PopUp Image
// Get Element
const modal = document.querySelector('.modal');
const imagePre = document.querySelectorAll('.work-grid-item img');
const fullImg = document.querySelector('.full-img');
const imgContent = document.querySelector('.modal-content');

// Listen for click
// Open Modal
imagePre.forEach((item) => {
  item.addEventListener('click', function() {
    modal.classList.add('open');
    fullImg.classList.add('open');

    // Dynamic Image and Text
    const fullImageSrc = item.getAttribute('data-original');
    fullImg.src = `./images/Album Cover/${fullImageSrc}`;
    const imageText = item.alt;
    imgContent.textContent = imageText;
  });
});
// Close Modal
modal.addEventListener('click', function(e) {
  if(e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    fullImg.classList.remove('open');
  }
})

// End Work Section PopUp Image