const secondHand = document.querySelector('.second-hand')
const hourHand = document.querySelector('.hour-hand') 
const minutesHand = document.querySelector('.minutes-hand')

function setDate(){
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds/60) * 360)  + 90
    
    const minutes = now.getMinutes()
    const minDegrees = ((minutes / 60) * 360) + 90

    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + 90

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minutesHand.style.transform = `rotate(${minDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    
    
}

setInterval(setDate,1000)