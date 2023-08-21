window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const header = document.getElementById('header');
    const stickyThreshold = header.offsetTop + 250;

    if (window.pageYOffset >= stickyThreshold) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
const elements = document.querySelectorAll('.fade-in');

function isInHalfViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
  const halfViewportHeight = 0.5 * viewportHeight;
  
  const elementTop = rect.top + element.offsetHeight;

  return elementTop >= halfViewportHeight && rect.top <= viewportHeight;
}

function handleScroll() {
  elements.forEach(element => {
    if (isInHalfViewport(element)) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);

handleScroll();

const gradientDiv = document.getElementById('gradient');
const galleryBtn = document.getElementById('gallery-btn');

function hideGradient() {
    gradientDiv.style.background = 'none'; 
    galleryBtn.style.visibility = 'hidden';
}

galleryBtn.addEventListener('click', hideGradient);

const galleryItems = document.querySelectorAll('.item')
const popup = document.getElementById('popup')
const popupPhoto = document.getElementById('popupPhoto')

  galleryItems.forEach(item => {
	item.addEventListener('click', () => {
		const imgSrc = item.querySelector('img').src
		popupPhoto.src = imgSrc
		popup.style.display = 'flex'
	})
})

popup.addEventListener('click', event => {
	if (event.target === popup) {
		popup.style.display = 'none'
	}
})

const searchIcon = document.getElementById('search-icon');
const searchForm = document.getElementById('search-form');

searchIcon.addEventListener('click', () => {
  searchForm.style.display = 'flex'; 
});

document.addEventListener('click', (event) => {
  if (!searchForm.contains(event.target) && !searchIcon.contains(event.target)) {
    searchForm.style.display = 'none';
  }
});