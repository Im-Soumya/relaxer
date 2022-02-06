const text = document.querySelector('#text')
const container = document.querySelector('.container')

function breathing() {
  text.innerText = 'Breathe in'
  container.className = 'container grow'
  setTimeout(() => {
    text.innerText = 'Now Hold'
    setTimeout(() => {
      text.innerText = 'Breathe out'
      container.className = 'container shrink'
    }, 1500)
  }, 3000)
}

breathing()

setInterval(breathing, 7500)