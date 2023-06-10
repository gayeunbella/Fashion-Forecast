async function logJSONData() {
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=43&lon=-80&cnt=14&appid=1603e506aac1347e2bcad80de8c6599f`);
    }
    catch {
        console.log('error fetching data')
    }

    const jsonData = await response.json();    
    console.log(jsonData);
  }
  
window.onload = logJSONData;

// external js: flickity.pkgd.js

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
