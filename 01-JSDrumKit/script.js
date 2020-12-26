function playSound(e) {
    let keyPressed = e.key.toLowerCase()
    const audio = document.querySelector(`audio[data-key="${keyPressed}"]`)
    const key = document.querySelector(`.key[data-key="${keyPressed}"]`)
    
    if(!audio){
     return 
    }
    audio.currentTime = 0;
    audio.play()
    key.classList.toggle('playing')
}



const keys = document.querySelectorAll('.key')
keys.forEach(key => { key.addEventListener('transitionend', removeTransition)

})

function removeTransition(e){
     if (e.propertyName !== 'transform') {
         return;
     }
     e.target.classList.remove('playing');

}

window.addEventListener('keydown', playSound);


