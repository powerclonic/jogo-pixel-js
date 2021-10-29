const player = document.querySelector(".dummyBlock");
const body = document.querySelector("body");
const inputValue = document.querySelector(".colorInput")
const eraseBtn = document.querySelector(".eraseBtn")
const pixelContainer = document.querySelector(".contentContainer")

const sizeX = Math.floor(body.clientWidth / 50) * 50
const sizeY = Math.floor(body.clientHeight / 50) * 50

const maxX = sizeX 
const maxY = sizeY 
const maxXY = 0

let leftPos = Number(player.style.left)
let topPos = Number(player.style.top)

const screenSize = () => {
    pixelContainer.style.width = `${sizeX}px`
    pixelContainer.style.height = `${sizeY}px`
}
screenSize()

document.addEventListener('keypress', function (e) {
    const moveVal = 50
    if (inputValue != document.activeElement) {
        if (e.key == 'a') {
            if (leftPos - moveVal >= maxXY) {
                leftPos -= moveVal
                player.style.left = `${leftPos}px`
                return
            }
        }
        if (e.key == 'd') {
            if (leftPos + moveVal < maxX) {
                leftPos += moveVal
                player.style.left = `${leftPos}px`
                return
            }
        }
        if (e.key == 'w') {
            if (topPos - moveVal >= maxXY) {
                topPos -= moveVal
                player.style.top = `${topPos}px`
                return
            }
        }
        if (e.key == 's') {
            if (topPos + moveVal < maxY) {
                topPos += moveVal
                player.style.top = `${topPos}px`
                return
            }
        }
        if (e.key == 'c' && inputValue.value != '') {
            let newBlock = document.createElement('div');
            let color = inputValue.value;
            pixelContainer.appendChild(newBlock)

            newBlock.classList = 'newBlock'
            newBlock.style.left = `${leftPos}px`
            newBlock.style.top = `${topPos}px`
            newBlock.style.height = `${moveVal}px`;
            newBlock.style.width = `${moveVal}px`;
            newBlock.style.backgroundColor = color
        }
    }
})

eraseBtn.addEventListener('click', function () {
    const blocks = document.querySelectorAll('.newBlock')
    for (let i of blocks) {
        i.remove()
    }
})