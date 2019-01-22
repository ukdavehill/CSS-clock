const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.min-hand');

function setDate(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = seconds * 6 + 90;
    secondsHand.style.transform =`rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = minutes * 6 + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = hours * 6 + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);