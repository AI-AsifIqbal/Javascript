let randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

function changeBgColor() {
    document.body.style.backgroundColor = randomColor()
}

let intervalId

const startChanging = function(){
    if(!intervalId) {
        intervalId = setInterval(changeBgColor,1000)
    }
}
const stopChanging = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.getElementById('start').addEventListener('click',startChanging)
document.getElementById('stop').addEventListener('click',stopChanging)