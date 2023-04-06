export default function Controls({
  minutesDisplay,
  buttonPlay,
}) {

  function play() {
    buttonPlay.classList.remove("hide")
  }

  function sumMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) + 5
  
    return newMinutes
  }
  
  function subtractMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) - 5
  
    if (newMinutes < 0) {
      newMinutes = 0
    }
  
    return newMinutes
  }

  function reset() {
    buttonPlay.classList.remove("hide")
  }
  
  return {
    sumMinutes,
    subtractMinutes,
    play,
    reset
  }
}