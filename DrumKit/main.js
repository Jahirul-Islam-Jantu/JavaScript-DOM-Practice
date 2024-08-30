window.addEventListener('keydown', playSounds)

function playSounds(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return // to stop all running
    audio.currentTime = 0; //rewind the start
    audio.play()
    key.classList.add('playing');
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return //skip if it is not a transform
    this.classList.remove('playing')
}

const key = document.querySelectorAll('.key')
key.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
})