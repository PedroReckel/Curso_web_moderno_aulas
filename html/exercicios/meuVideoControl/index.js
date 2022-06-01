let i = 0
let vid = document.getElementById("meuVideo")

function playVid() { 
  vid.play()
  if (i == 0) {
        i = 1
        let elem = document.getElementById("myBar")
        let width = 1
        let id = setInterval(frame, 10)
        function frame() {
          if (width >= 100) {
            clearInterval(id)
            i = 0
          } else {
            width++
            // elem.style.width = width + "%"
            setInterval(() => {
                const percentual = (video.currentTime / videoDuration) * 100
                elem.style.width = `${width} + ${percentual}%`
               }
            )
          }
        }
    }
} 

function pauseVid() { 
  vid.pause()
} 