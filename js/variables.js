export {
  buttonTemeLightMode,
  buttonTemeDarkMode,
  minutesDisplay,
  secondsDisplay,
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
  body
}

const buttonTemeLightMode = document.querySelector(".lightMode")
const buttonTemeDarkMode= document.querySelector('.darkMode')

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

const buttonPlay = document.querySelector('#play')
const buttonPause = document.querySelector('#pause')
const buttonAddTime = document.querySelector('#addTime')
const buttonReduceTime = document.querySelector('#reduceTime')

const cardFlorest = document.querySelector('.florest')
const cardRain = document.querySelector('.rain')
const cardCofeeShop = document.querySelector('.cofeeShop')
const cardFireplace = document.querySelector('.fireplace')

const buttonFlorest = cardFlorest.querySelector('.cardButton')
const buttonRain = cardRain.querySelector('.cardButton')
const buttonCofeeShop = cardCofeeShop.querySelector('.cardButton')
const buttonFireplace = cardFireplace.querySelector('.cardButton')

const inputFlorest = cardFlorest.querySelector('input')
const inputRain = cardRain.querySelector('input')
const inputCofeeShop = cardCofeeShop.querySelector('input')
const inputFirePlace = cardFireplace.querySelector('input')

const body = document.querySelector('body')