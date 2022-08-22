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
  buttonFlorest,
  buttonRain,
  buttonCofeeShop,
  buttonFireplace,
  inputFlorest,
  inputRain,
  inputCofeeShop,
  inputFirePlace,
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

export default function ({ timer, themes}) {
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

  buttonTemeLightMode.addEventListener('click', function () {
    themes.toggleTeme()
    playSound(buttonPressAudio)
    playSound(bgAudio)
    stopSound(soundFlorest)
    stopSound(soundRain)
    stopSound(soundFirePlace)
    stopSound(soundCofeeShop)
  })

  buttonTemeDarkMode.addEventListener('click', function () {
    themes.toggleTeme()
    playSound(buttonPressAudio)
    playSound(bgAudio)
    stopSound(soundFlorest)
    stopSound(soundRain)
    stopSound(soundFirePlace)
    stopSound(soundCofeeShop)
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

  cardFlorest.addEventListener('click', function () {
    themes.toggleCollorsCards(cardFlorest, buttonFlorest, inputFlorest)
    themes.removeActiveCollorsCards(cardRain, buttonRain, inputRain)
    themes.removeActiveCollorsCards(cardCofeeShop, buttonCofeeShop, inputCofeeShop)
    themes.removeActiveCollorsCards(cardFireplace, buttonFireplace, inputFirePlace)

    activeSound(cardFlorest, soundFlorest)
    stopSound(bgAudio)
    stopSound(soundRain)
    stopSound(soundCofeeShop)
    stopSound(soundFirePlace)
  })

  cardRain.addEventListener('click', function () {
    themes.toggleCollorsCards(cardRain, buttonRain, inputRain)
    themes.removeActiveCollorsCards(cardFlorest, buttonFlorest, inputFlorest)
    themes.removeActiveCollorsCards(cardCofeeShop, buttonCofeeShop, inputCofeeShop)
    themes.removeActiveCollorsCards(cardFireplace, buttonFireplace, inputFirePlace)

    activeSound(cardRain, soundRain)
    stopSound(bgAudio)
    stopSound(soundFlorest)
    stopSound(soundCofeeShop)
    stopSound(soundFirePlace)
  })

  cardCofeeShop.addEventListener('click', function () {
    themes.toggleCollorsCards(cardCofeeShop, buttonCofeeShop, inputCofeeShop)
    themes.removeActiveCollorsCards(cardFlorest, buttonFlorest, inputFlorest)
    themes.removeActiveCollorsCards(cardRain, buttonRain, inputRain)
    themes.removeActiveCollorsCards(cardFireplace, buttonFireplace, inputFirePlace)

    activeSound(cardCofeeShop, soundCofeeShop)
    stopSound(bgAudio)
    stopSound(soundFlorest)
    stopSound(soundRain)
    stopSound(soundFirePlace)
  })

  cardFireplace.addEventListener('click', function () {
    themes.toggleCollorsCards(cardFireplace, buttonFireplace, inputFirePlace)
    themes.removeActiveCollorsCards(cardFlorest, buttonFlorest, inputFlorest)
    themes.removeActiveCollorsCards(cardRain, buttonRain, inputRain)
    themes.removeActiveCollorsCards(cardCofeeShop, buttonCofeeShop, inputCofeeShop)

    activeSound(cardFireplace, soundFirePlace)
    stopSound(bgAudio)
    stopSound(soundFlorest)
    stopSound(soundRain)
    stopSound(soundCofeeShop)
  })

}