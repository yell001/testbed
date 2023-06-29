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

  // Check if swipe was left-to-right or right-to-left
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX < 0) {
      plusSlides(1); // 오른쪽으로 슬라이드
    } else {
      plusSlides(-1); // 왼쪽으로 슬라이드
    }
  }
});
