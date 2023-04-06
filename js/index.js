import { 
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFireplace,
  buttonLightMode,
  buttonDarkMode
 } from "./elements.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"

const controls = Controls({
  minutesDisplay,
  buttonPlay,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({
  controls,
  timer,
  sound
})