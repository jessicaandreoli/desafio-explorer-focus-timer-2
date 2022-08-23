export {
  kitchenTimer,
  buttonPressAudio,
  soundFlorest,
  soundRain,
  soundCofeeShop,
  soundFirePlace,
  activeSound,
  stopSound,
  bgAudio,
  volumeInput,
  playSound,
}


const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const soundFlorest = new Audio("./assets/sounds/Floresta.mp3")
const soundRain = new Audio("./assets/sounds/Chuva.mp3")
const soundCofeeShop = new Audio("./assets/sounds/Cafeteria.mp3")
const soundFirePlace = new Audio("./assets/sounds/Lareira.mp3")
const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")


bgAudio.loop = true

function playSound(sound){
  sound.play()
}

function activeSound(card, sound) {
  let isActive = card.classList.contains('active')
  if(isActive === true){
    sound.play()
  } else {
    sound.pause()
  }
}

function stopSound(soundOne, soundtwo, soundTree, soundFour) {
  soundOne.pause()
  soundtwo.pause()
  soundTree.pause()
  soundFour.pause()
}

function volumeInput(sound, volume) {
  sound.volume = volume.value
}




