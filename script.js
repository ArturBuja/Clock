const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];

toggleEl.addEventListener('click', (e)=>{
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    if(html.classList.contains('dark')){
        e.target.innerHTML = 'Jasny motyw'
    } else {
        e.target.innerHTML = 'Ciemny motyw'
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12
    const minutes = time.getMinutes();
    const second = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 23, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
    dateEl.innerHTML = `${days[day]}, ${months[month]}<span class="circle"> ${date}</span>`

}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setTime()
setInterval(setTime,1000)
