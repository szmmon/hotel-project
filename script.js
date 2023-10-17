document.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar")
  if (window.scrollY > 60) {
    nav.classList.add("scrolled")
  } else nav.classList.remove("scrolled")
})

const changeBackground = () => {
  const section = document.querySelector(".center")
  const images = [
    "url(images/pexels-deeana-arts-2565222.jpg)",
    "url(images/pexels-iván-rivero-1001965.jpg)",
    "url(images/hotel-website/images/pexels-los-muertos-crew-7603330.jpg)",
  ]
  const background = images[Math.floor(Math.random() * images.length)]
  section.computedStyleMap.backgroundImage = background
}
setInterval(changeBackground, 100)
