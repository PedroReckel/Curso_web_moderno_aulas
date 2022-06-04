let i = 0
let vid = document.getElementById("meuVideo")

function playVid() { 
  vid.play()
  vid.oncontextmenu = () => false

  setInterval(() => {
    const percentual = (vid.currentTime / vid.duration) * 100
    const valorDiv = document.getElementById("myBar")
    valorDiv.style.width = `${percentual}%`
    valorDiv.innerHTML = `${percentual.toFixed(1)}%`
  }, 500)
} 

function pauseVid() { 
  vid.pause()
} 