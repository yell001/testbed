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

var startPos;
var endPos;
var slideContainer = document.querySelector('.slideshow-container');

slideContainer.addEventListener('touchstart', function(e) {
  startPos = e.changedTouches[0].clientX;
});

slideContainer.addEventListener('touchend', function(e) {
  endPos = e.changedTouches[0].clientX;
  if (startPos - endPos > 0) {
    plusSlides(1); // 오른쪽으로 슬라이드
  } else {
    plusSlides(-1); // 왼쪽으로 슬라이드
  }
});
