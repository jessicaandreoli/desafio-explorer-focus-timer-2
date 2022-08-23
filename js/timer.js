import { playSound } from "./sounds.js"
import { buttonPlay } from "./variables.js"

export default function ({
  minutesDisplay,
  secondsDisplay,
  kitchenTimer,
}) {
  let newMinutes = Number(minutesDisplay.textContent)
  let newSeconds = Number(secondsDisplay.textContent)
  let timeOut
  let minutes
  let seconds


  function upDateDisplay() {
    buttonPlay.disabled = true
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)

    timeOut = setTimeout(function () {

      if (seconds == 0) {
        seconds = 60
        --minutes
      }

      startDisplay(minutes, String(seconds - 1))
      --seconds

      if (minutes == 0 && seconds == 0) {
        resetTimer()
        return
      }

      upDateDisplay()

    }, 100)


  }

  function startDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetTimer() {
    clearTimeout(timeOut)
    playSound(kitchenTimer)
    startDisplay(newMinutes, newSeconds)
  }

  function stopTimer() {
    clearTimeout(timeOut)
    buttonPlay.disabled = false
  }

  function addTimer() {
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)
    if (minutes < 60) {
      startDisplay((minutes + 5), seconds)
    }
  }

  function reduceTimer() {
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)
    console.log(minutes)
    if (minutes > 5) {
      startDisplay((minutes - 5), seconds)
    }
  }

  return {
    upDateDisplay,
    startDisplay,
    stopTimer,
    addTimer,
    reduceTimer
  }
}



