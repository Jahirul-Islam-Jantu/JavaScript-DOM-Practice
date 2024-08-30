const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('#time')

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds().toLocaleString();
    const secondsDegree = ((seconds/ 60) * 360 ) +90
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    const minutes = now.getMinutes().toLocaleString();
    const minutesDegree = ((minutes/60) * 360) +90
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    const hours = now.getHours().toLocaleString();
    const hoursDegree = ((hours/12) * 360) +90
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setDate, 1000);


const digitalTime = new Date().toLocaleTimeString();
let seconds =new Date().getSeconds().toLocaleString(); ;
seconds.toString().padStart(2, '0');
console.log(seconds)
time.textContent = digitalTime;
setInterval(digitalTime, 1000)
