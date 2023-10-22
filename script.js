//background change
document.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar")
  if (window.scrollY > 60) {
    nav.classList.add("scrolled")
  } else nav.classList.remove("scrolled")
})

const changeBackground = () => {
  const section = document.querySelector(".sec1-background")
  const images = [
    "url(images/bg1.jpg)",
    "url(images/bg2.jpg)",
    "url(images/bg3.jpg)",
    "url(images/bg4.jpg)",
    "url(images/bg5.jpg)",
  ]
  const background = images[Math.floor(Math.random() * images.length)]

  section.style.backgroundImage = background
}
setInterval(changeBackground, 8000)

//scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    }
  })
})
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))

const hiddenElements2 = document.querySelectorAll(".hidden2")
hiddenElements2.forEach((el) => observer.observe(el))

//adding functionallity for popups
const openPopupBtn = document.querySelectorAll(".open-popup")

const menuPopup = document.querySelector(".menu")
const cocktailsPopup = document.querySelector(".cocktail")
const roomsPopup = document.querySelector(".rooms")

openPopupBtn.forEach((popup) => {
  popup.addEventListener("click", () => {
    if (popup.id == "menu") {
      menuPopup.classList.add("visible")
    } else if (popup.id == "cocktail") {
      cocktailsPopup.classList.add("visible")
    } else if (popup.id == "rooms") {
      roomsPopup.classList.add("visible")
    }
  })
  const closeBtn = document.querySelectorAll(".close-popup")
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      menuPopup.classList.remove("visible")
      cocktailsPopup.classList.remove("visible")
      roomsPopup.classList.remove("visible")
    })
  })
})

//making photos in rooms popup change
const imageToChangeSuite = document.querySelector(".image-change")
const changeImg = () => {
  imageToChangeSuite.classList.toggle("image-changed")
}
setInterval(changeImg, 5000)

//slider for rooms in popup
class Slider {
  constructor() {
    this.slider = document.querySelector(".slider-slide") //element slider
    this.slides = [...this.slider.querySelectorAll(".slider-slides")]
    console.log(this.slides[0])
    this.currentSlide = Math.max(
      0,
      this.slides.findIndex((el) => el.classList.contains("is-active"))
    ) //current slide
    this.createPrevNext()
    this.setSlide(this.currentSlide)
  }

  createPrevNext() {
    this.btnNext = document.createElement("button")
    this.btnNext.type = "button"
    this.btnNext.innerText = "Next room"
    this.btnNext.classList.add("slider-button", "slider-button-next")
    this.btnNext.addEventListener("click", () => this.slideNext())

    this.slider.append(this.btnNext)
  }
  slideNext() {
    this.currentSlide++
    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0
    }
    this.setSlide(this.currentSlide)
  }
  setSlide(index) {
    //delete isActive class for every slide
    this.slides.forEach((slide) => {
      slide.classList.remove("is-active")
    })
    //add class to a chosen one
    this.slides[index].classList.add("is-active")
    //update current slide
    this.currentSlide = index
  }
}

const slider = new Slider("#mySlider")
