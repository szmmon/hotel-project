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
// })
// menuBtn.addEventListener("click", () => {
//   menuPopup.classList.add("visible")

//   const closeBtn = document.querySelectorAll(".close-popup")
//   closeBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       menuPopup.classList.remove("visible")
//     })
//   })
// })
