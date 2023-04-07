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
  buttonDarkMode,
  forestVolumeSlider,
  rainVolumeSlider,
  coffeeVolumeSlider,
  fireplaceVolumeSlider,
  volumeSlider
} from "./elements.js"

export default function({
  controls,
  timer,
  sound
}) {

  // SELECTION

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

  // CONTROLS
    
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

  // SOUND
    
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

  // VOLUME

  function changeVolume(audio, valueSlider) {
    audio.volume = valueSlider.value;
  }

  function turnOnVolume(audio, valueSlider) {
    valueSlider.value = 0.5
    audio.volume = valueSlider.value
  }

  function turnOffVolume(audio, valueSlider) {
    valueSlider.value = 0
    audio.volume = valueSlider.value
  }

  forestVolumeSlider.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  rainVolumeSlider.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  coffeeVolumeSlider.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  fireplaceVolumeSlider.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  forestVolumeSlider.addEventListener('change', () => {
    changeVolume(sound.forestAudio, forestVolumeSlider)
  })

  rainVolumeSlider.addEventListener('change', () => {
    changeVolume(sound.rainAudio, rainVolumeSlider)
  })

  coffeeVolumeSlider.addEventListener('change', () => {
    changeVolume(sound.coffeeAudio, coffeeVolumeSlider)
  })

  fireplaceVolumeSlider.addEventListener('change', () => {
    changeVolume(sound.fireplaceAudio, fireplaceVolumeSlider)
  })

  // VIEW
    
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
