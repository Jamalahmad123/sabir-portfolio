// Navbar UI
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const closeNav = document.querySelector('.close-btn');
const sidebarLinks = document.querySelector('.sidebar-links');
// Fixed navbar
window.addEventListener('scroll', function() {
  // Navbar
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

// Close on clicking an anchor element
sidebarLinks.addEventListener('click', function(event) {
  // if(event.target)
  if(event.target.classList.contains('scroll-links')) {
    sidebar.classList.remove('show-sidebar');
  }
});

// Scrolling functionality
const scrollLinks = document.querySelectorAll('.scroll-links');

// Loop over each of it
scrollLinks.forEach((linsk) => {
  linsk.addEventListener('click', function(event) {
    // calculate the nav height
    const navbarHeight = navbar.getBoundingClientRect().height;
    const navLinksHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-navbar');
    // Scroll each link
    const id = event.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop - navbarHeight;
    window.scrollTo({
      left: 0,
      top: position,
    });
    // Prevent Default
    event.preventDefault();
  })
})


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

// Getting date on each new year
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// End date