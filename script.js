var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var slideHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Set the max-height of each slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.maxHeight = slideHeight + 'px';
  }
  
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

var startX, startY, endX, endY;
var slideContainer = document.querySelector('.slideshow-container');

slideContainer.addEventListener('touchstart', function(e) {
  startX = e.changedTouches[0].clientX;
  startY = e.changedTouches[0].clientY;
});

slideContainer.addEventListener('touchend', function(e) {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  var diffX = endX - startX;
  var diffY = endY - startY;

  // Calculate the distance swiped
  var distance = Math.sqrt(diffX * diffX + diffY * diffY);

  // Only perform a slide if the swipe was a significant distance and more horizontal than vertical
  if (distance > 100 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX < 0) {
      plusSlides(1); // 오른쪽으로 슬라이드
    } else {
      plusSlides(-1); // 왼쪽으로 슬라이드
    }
  }
});

// Update the max-height of slides when the window is resized
window.addEventListener('resize', function() {
  showSlides(slideIndex);
});
