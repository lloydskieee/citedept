document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      slides.forEach(function(slide, index) {
        if (index === slideIndex) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Initial slide display
    showSlide(currentSlide);
  
    // Automatic slideshow
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });
  