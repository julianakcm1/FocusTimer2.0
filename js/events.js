import { 
  buttonPlay, 
  buttonStop, 
  buttonPlus, 
  buttonMinus, 
  buttonSoundForest, 
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFireplace,
  buttonLightMode,
  buttonDarkMode
} from "./elements.js"

export default function({
  controls,
  timer,
  sound
}) {

  function addSelection(card) {
    removeSelection()
    card.classList.add('select')
  }
  
  function removeSelection() {
    buttonSoundForest.classList.remove('select')
    buttonSoundRain.classList.remove('select')
    buttonSoundCoffee.classList.remove('select')
    buttonSoundFireplace.classList.remove('select')
  }
    
  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countDown()
  })
    
  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
  })
    
  buttonPlus.addEventListener('click', () => {
    let newMinutes = controls.sumMinutes()
    
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
    
  buttonMinus.addEventListener('click', () => {
    let newMinutes = controls.subtractMinutes()
    
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
    
  buttonSoundForest.addEventListener('click', () => {
    sound.resetSounds()
    if(!buttonSoundForest.classList.contains('select')) {
      addSelection(buttonSoundForest)
      sound.forestAudio.play()
      return
    }
    removeSelection()
  })
    
  buttonSoundRain.addEventListener('click', () => {
    sound.resetSounds()
    if(!buttonSoundRain.classList.contains('select')) {
      addSelection(buttonSoundRain)
      sound.rainAudio.play()
      return
    }
    removeSelection()
  })
    
  buttonSoundCoffee.addEventListener('click', () => {
    sound.resetSounds()
    if(!buttonSoundCoffee.classList.contains('select')) {
      addSelection(buttonSoundCoffee)
      sound.coffeeAudio.play()
      return
    }
    removeSelection()
  })
    
  buttonSoundFireplace.addEventListener('click', () => {
    sound.resetSounds()
    if(!buttonSoundFireplace.classList.contains('select')) {
      addSelection(buttonSoundFireplace)
      sound.fireplaceAudio.play()
      return
    }
    removeSelection()
  })
    
  function changeView() {
    buttonLightMode.classList.toggle('hide')
    buttonDarkMode.classList.toggle('hide')
    document.querySelector('html').classList.toggle('light')
  }
    
  buttonLightMode.addEventListener('click', () => {
    changeView()
  })
    
  buttonDarkMode.addEventListener('click', () => {
    changeView()
  })
}