import {
  buttonTemeLightMode,
  buttonTemeDarkMode,
  buttonPlay,
  buttonPause,
  buttonAddTime,
  buttonReduceTime,
  cardFlorest,
  cardRain,
  cardCofeeShop,
  cardFireplace,
  inputFlorest,
  inputRain,
  inputCofeeShop,
  inputFirePlace,
  buttonFlorest,
  buttonRain,
  buttonCofeeShop,
  buttonFireplace,
} from "./variables.js"

import {
  buttonPressAudio,
  soundFlorest,
  soundRain,
  soundCofeeShop,
  soundFirePlace,
  activeSound,
  stopSound,
  bgAudio,
  volumeInput,
  playSound
} from "./sounds.js"

export default function ({ timer, themes }) {

  buttonTemeLightMode.addEventListener('click', function () {
    themes.toggleTeme()
    playSound(buttonPressAudio)
    playSound(bgAudio)
    stopSound(soundFlorest, soundRain, soundFirePlace,soundCofeeShop)
    themes.removeActiveCollorsCards(cardFlorest, cardCofeeShop, cardFireplace)
    themes.removeActiveCollorsCards(cardFlorest, cardCofeeShop, cardRain)
    
  })

  buttonTemeDarkMode.addEventListener('click', function () {
    themes.toggleTeme()
    playSound(buttonPressAudio)
    playSound(bgAudio)
    stopSound(soundFlorest, soundRain, soundFirePlace,soundCofeeShop)
    themes.removeActiveCollorsCards(cardFlorest, cardCofeeShop, cardFireplace)
    themes.removeActiveCollorsCards(cardFlorest, cardCofeeShop, cardRain)
  })

  inputFlorest.addEventListener("input", function () {
    volumeInput(soundFlorest, inputFlorest)
  })

  inputRain.addEventListener("input", function () {
    volumeInput(soundRain, inputRain)
  })

  inputCofeeShop.addEventListener("input", function () {
    volumeInput(soundCofeeShop, inputCofeeShop)
  })

  inputFirePlace.addEventListener("input", function () {
    volumeInput(soundFirePlace, inputFirePlace)
  })

  
  buttonPlay.addEventListener('click', function () {
    timer.upDateDisplay()
  })

  buttonPause.addEventListener('click', function () {
    timer.stopTimer()
  })

  buttonAddTime.addEventListener('click', function () {
    timer.addTimer()
  })

  buttonReduceTime.addEventListener('click', function () {
    timer.reduceTimer()
  })

  buttonFlorest.addEventListener('click', function () {
    themes.toggleCollorsCards(cardFlorest)
    themes.removeActiveCollorsCards(cardRain, cardCofeeShop, cardFireplace)

    activeSound(cardFlorest, soundFlorest)
    stopSound(bgAudio, soundRain,soundCofeeShop, soundFirePlace)
  })

  buttonRain.addEventListener('click', function () {
    themes.toggleCollorsCards(cardRain)
    themes.removeActiveCollorsCards(cardFlorest, cardCofeeShop, cardFireplace)

    activeSound(cardRain, soundRain)
    stopSound(bgAudio,soundFlorest,soundCofeeShop,soundFirePlace)
  })

  buttonCofeeShop.addEventListener('click', function () {
    themes.toggleCollorsCards(cardCofeeShop)
    themes.removeActiveCollorsCards(cardFlorest, cardRain, cardFireplace)

    activeSound(cardCofeeShop, soundCofeeShop)
    stopSound(bgAudio, soundFlorest, soundRain,soundFirePlace)
  })

  buttonFireplace.addEventListener('click', function () {
    themes.toggleCollorsCards(cardFireplace)
    themes.removeActiveCollorsCards(cardFlorest, cardRain, cardCofeeShop)

    activeSound(cardFireplace, soundFirePlace)
    stopSound(bgAudio,soundFlorest,soundRain,soundCofeeShop)
  })
}