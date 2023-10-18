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
