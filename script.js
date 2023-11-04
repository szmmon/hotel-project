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
      const suite = document.querySelector(".suite")
      suite.classList.add("is-active")
      var currentSlideIndex = 0
      //console.log(currentSlideIndex)
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
const imageToChangeSuite = document.querySelector(".image-change-suite")
const changeImgSuite = () => {
  imageToChangeSuite.classList.toggle("image-changed-suite")
}
setInterval(changeImgSuite, 5000)

const imageToChangeJrSuite = document.querySelector(".image-change-jrsuite")
const changeImgJrSuite = () => {
  imageToChangeJrSuite.classList.toggle("image-changed-jrsuite")
}
setInterval(changeImgJrSuite, 5000)

const imageToChangeSuperior = document.querySelector(".image-change-superior")
const changeImgSuperior = () => {
  imageToChangeSuperior.classList.toggle("image-changed-superior")
}
setInterval(changeImgSuperior, 5000)

//slides for popup rooms functionality
let currentSlide = document.querySelector(".is-active")
const allSLides = document.querySelectorAll(".one-slide")
const nextBtn = document.querySelector(".slide-next")
const prevBtn = document.querySelector(".slide-prev")
const sliderBtns = document.querySelectorAll(".slider-btn")
const allSlidesArr = [...allSLides]
console.log(allSlidesArr)
let i = 0

for (i in allSlidesArr) {
  if (allSlidesArr[i].classList.contains("is-active")) {
    var currentSlideIndex = i
    currentSlide = allSlidesArr[i]
  }
}

sliderBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("slide-prev")) {
      // console.log(currentSlideIndex)
      updateSlide()
      currentSlideIndex--

      if (currentSlideIndex != 0) {
        currentSlideIndex = allSlidesArr.length - 1
        currentSlide = allSlidesArr[currentSlideIndex]
        // console.log(currentSlide)
        currentSlide.classList.add("is-active")
      } else {
        currentSlide = allSlidesArr[currentSlideIndex]
        // console.log(currentSlide)
        currentSlide.classList.add("is-active")
      }
    } else if (btn.classList.contains("slide-next")) {
      updateSlide()
      if (currentSlideIndex < allSlidesArr.length - 1) {
        currentSlideIndex++
        currentSlide = allSlidesArr[currentSlideIndex]
        currentSlide.classList.add("is-active")
      } else {
        currentSlideIndex = 0
        currentSlide = allSlidesArr[currentSlideIndex]
        currentSlide.classList.add("is-active")
      }
    }
  })
})
const updateSlide = () => {
  allSLides.forEach((slide) => {
    if (slide.classList.contains("is-active")) {
      slide.classList.remove("is-active")
    }
  })
}
//datepicker

const datepicker = function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left",
      startDate: `${moment()}`,
      endDate: `${moment().add(12, "months").calendar()}`,
    }

    // function (start, end, label) {
    //   console.log(
    //     "A new date selection was made: " +
    //       start.format("YYYY-MM-DD") +
    //       " to " +
    //       end.format("YYYY-MM-DD")
    //   )
    // }
  )
}
datepicker()

//after-booking window
