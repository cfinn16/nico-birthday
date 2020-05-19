document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('feature-img')
  setImage()

  img.addEventListener('transitionend', (e) => {
    console.log(e.target.classList)
    if ([...e.target.classList].includes('fade-out')) setImage()
  })

  window.setInterval(fadeOut, 3000)
})

setImage = () => {
  const img = document.getElementById('feature-img')
  let num = Math.floor(Math.random() * 11) + 1
  if (img.src.includes(num)) {
    if (num === 11) {
      num -= 1
    } else {
      num += 1
    }
  }
  img.src = `images/Nico${num}.jpg`
  if ([...img.classList].includes('fade-out')) img.classList.toggle('fade-out')
}

fadeOut = () => {
  console.log('firing')
  const img = document.getElementById('feature-img')
  if (![...img.classList].includes('fade-out')) img.classList.toggle('fade-out')
}
