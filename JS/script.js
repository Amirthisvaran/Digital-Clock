let ampm = document.getElementById('ampm')
function displayTime() {
    let time = new Date()
    let hours = time.getHours()
    let minutes = padZero(time.getMinutes())
    let seconds = padZero(time.getSeconds())
    if(hours > 12){
        hours = hours - 12
        ampm.innerHTML = 'PM'
    }
    document.getElementById('hours').innerHTML = padZero(hours)
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
}

function padZero(num) {
    return num<10? "0"+num : num
}
setInterval(displayTime,500)