import Themes from "./themes.js"
import Events from "./events.js"
import Timer from "./timer.js"
import {kitchenTimer, activeSound}from "./sounds.js"

import {
  buttonTemeLightMode,
  buttonTemeDarkMode,
  minutesDisplay,
  secondsDisplay,
  body
} from './variables.js'


const themes = Themes({
  buttonTemeLightMode, 
  buttonTemeDarkMode,
  body
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  kitchenTimer,
  activeSound,
})

Events({timer, themes})


themes.startAplication()

//function volumeInput(sound, volume) { 
 // sound.volume = volume.value
//} 








