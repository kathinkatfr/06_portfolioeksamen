window.addEventListener("load", startSlideShow);

function startSlideShow() {
  console.log("startSlideShow");

  let slides = document.querySelectorAll(".slide"); //variabel der vælger alle billeder. Bestemmer varibalen med det samme i stedet for senere
  let currentSlide = 0; //listen af billeder starter altid på 0. 0 er det første element

  function showSlide(index) {
    //"index" viser at vi har med en liste af tal
    slides.forEach((slide, i) => {
      //
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Vis første slide
  showSlide(currentSlide);

  // Sæt slideshow interval (skifter hvert 3. sekund)
  setInterval(nextSlide, 3000);
}
