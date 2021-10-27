const player = document.querySelector(".dummyBlock");
const body = document.querySelector("body");
const inputValue = document.querySelector(".colorInput")
const eraseBtn = document.querySelector(".eraseBtn")
const sizeInput = document.querySelector(".sizeSelector")

let leftPos = Number(player.style.left)
let topPos = Number(player.style.top)

document.addEventListener('keypress', function (e) {
    const sizeValue = Number(sizeInput.value)
    if (inputValue != document.activeElement) {
        if (e.key == 'a') {
            if (leftPos >= 50) {
                leftPos -= sizeValue
                player.style.left = `${leftPos}px`
                return
            }
        }
        if (e.key == 'd') {
            if (leftPos <= 1750) {
                leftPos += sizeValue
                player.style.left = `${leftPos}px`
                return
            }
        }
        if (e.key == 'w') {
            if (topPos >= 50) {
                topPos -= sizeValue
                player.style.top = `${topPos}px`
                return
            }
        }
        if (e.key == 's') {
            if (topPos <= 850) {
                topPos += sizeValue
                player.style.top = `${topPos}px`
                return
            }
        }
        if (e.key == 'c' && inputValue.value != '') {
            let newBlock = document.createElement('div');
            let color = inputValue.value;
            body.appendChild(newBlock)

            newBlock.classList = 'newBlock'
            newBlock.style.left = `${leftPos}px`
            newBlock.style.top = `${topPos}px`
            newBlock.style.height = `${sizeValue}px`;
            newBlock.style.width = `${sizeValue}px`;
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

sizeInput.addEventListener('change', function () {
    const sizeValue = Number(sizeInput.value);
    player.style.width = `${sizeValue}px`
    player.style.height = `${sizeValue}px`
    console.log(sizeValue)
})