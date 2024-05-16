let canvas = document.getElementById('canvas')
let cnv = canvas.getContext('2d')
let cords, line, line2
let figures = ['j', 'i', 'o', 'l', 'z', 't', 's', '1']
let actual_figure = []
let coord = []
let env = Array.from({ length: 20 }, () => Array(10).fill(0))
let currentFigure, currentColor, currentX, currentY
let gameInterval
var counter = 0;
document.getElementById("count").innerHTML = counter;


function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}


function draw_env() {
    cnv.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < env.length; i++) {
        for (let j = 0; j < env[i].length; j++) {
            if (env[i][j] !== 0) {
                cnv.fillStyle = env[i][j]
                cnv.fillRect(j * 30, i * 30, 30, 30)
                cnv.strokeRect(j * 30, i * 30, 30, 30)
            }
        }
    }
}


function draw_figure() {
    for (let y = 0; y < currentFigure.length; y++) {
        for (let x = 0; x < currentFigure[y].length; x++) {
            if (currentFigure[y][x]) {
                cnv.fillStyle = currentColor
                cnv.fillRect((currentX + x) * 30, (currentY + y) * 30, 30, 30)
                cnv.strokeRect((currentX + x) * 30, (currentY + y) * 30, 30, 30)
            }
        }
    }
}


function collision(x, y, figure) {
    for (let i = 0; i < figure.length; i++) {
        for (let j = 0; j < figure[i].length; j++) {
            if (figure[i][j] && (env[y + i] && env[y + i][x + j]) !== 0) {
                return true
            }
        }
    }
    return false
}


function merge() {
    for (let y = 0; y < currentFigure.length; y++) {
        for (let x = 0; x < currentFigure[y].length; x++) {
            if (currentFigure[y][x]) {
                env[currentY + y][currentX + x] = currentColor
            }
        }
    }
}


function rotate(figure) {
    let newFigure = []
    for (let y = 0; y < figure[0].length; y++) {
        newFigure[y] = []
        for (let x = 0; x < figure.length; x++) {
            newFigure[y][x] = figure[figure.length - 1 - x][y]
        }
    }
    return newFigure
}


function removeLines() {
    let linesRemoved = 0;
    for (let y = env.length - 1; y >= 0; y--) {
        let isFullLine = true;
        for (let x = 0; x < env[y].length; x++) {
            if (env[y][x] === 0) {
                isFullLine = false;
                break;
            }
        }
        if (isFullLine) {
            env.splice(y, 1);
            env.unshift(Array(10).fill(0));
            linesRemoved++;
            y++
        }
    }
    if (linesRemoved > 0) {
        if (linesRemoved === 4) {
            counter += linesRemoved * 2
            alert("ТЕТРИС")
        } else {
            counter += linesRemoved;
        }
        document.getElementById("count").innerHTML = counter;
    }
}


function newFigure() {
    let index = getRandomInt(0, figures.length - 1)
    switch (figures[index]) {
        case 'j':
            currentFigure = [[1, 0, 0], [1, 1, 1]]
            currentColor = 'rgb(0, 0, 255)'
            break
        case 'i':
            currentFigure = [[1], [1], [1], [1]]
            currentColor = 'rgb(0, 255, 255)'
            break
        case 'o':
            currentFigure = [[1, 1], [1, 1]]
            currentColor = 'rgb(255, 255, 0)'
            break
        case 'l':
            currentFigure = [[0, 0, 1], [1, 1, 1]]
            currentColor = 'rgb(255, 127, 0)'
            break
        case 'z':
            currentFigure = [[1, 1, 0], [0, 1, 1]]
            currentColor = 'rgb(255, 0, 0)'
            break
        case 't':
            currentFigure = [[0, 1, 0], [1, 1, 1]]
            currentColor = 'rgb(128, 0, 128)'
            break
        case 's':
            currentFigure = [[0, 1, 1], [1, 1, 0]]
            currentColor = 'rgb(0, 255, 0)'
            break
        case '1':
            currentFigure = [[1]]
            currentColor = 'rgb(127, 0, 255)'
            break

    }
    currentX = 3
    currentY = 0
}


function moveFigure(dx, dy) {
    if (!collision(currentX + dx, currentY + dy, currentFigure)) {
        currentX += dx
        currentY += dy
    } else if (dy === 1) {
        merge()
        removeLines()
        newFigure()
        if (collision(currentX, currentY, currentFigure)) {
            clearInterval(gameInterval)
            alert("Game Over")
        }
    }
}


function rotateFigure() {
    let rotatedFigure = rotate(currentFigure)
    if (!collision(currentX, currentY, rotatedFigure)) {
        currentFigure = rotatedFigure
    }
}


function figure_move(event) {
    switch (event.code) {
        case 'ArrowLeft':
            moveFigure(-1, 0)
            break
        case 'ArrowRight':
            moveFigure(1, 0)
            break
        case 'ArrowDown':
            moveFigure(0, 1)
            break
        case 'ArrowUp':
            rotateFigure()
            break
    }
    draw_env()
    draw_figure()
}


function gameLoop() {
    moveFigure(0, 1)
    draw_env()
    draw_figure()
}


function START_GAME() {
    draw_env()
    newFigure()
    gameInterval = setInterval(gameLoop, 500)
    window.addEventListener("keydown", figure_move)
}


START_GAME();
