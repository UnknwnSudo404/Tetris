// let canvas = document.getElementById('canvas')
// let cnv = canvas.getContext('2d')
// let cords, line, line2
// let figures = ['j', 'i', 'o', 'l', 'z', 't', 's']
// let actual_figure = []
// let coord = []
// let env = [[[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
//           [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []]]


// function getRandomInt(min, max) //ПОЛУЧЕНИЕ РАНДОМНОГО ЧИСЛА
// { 
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// function find_filled_cells() //НАХОЖДЕНИЕ КООРДИНАТ ЗАПОЛНЕННОЙ КЛЕТКИ
// {
//     for (let i = 0; i < env.length; i++) {
//         a = env[i]
//         for (let j = 0; j < a.length; j++) {
//             b = a[j]
//             if (b[0] == 1) {
//                 return [i, j]
//             }
//         }
//     }
// }


// function draw_env() //ОТРИСОВКА ОКРУЖЕНИЯ
// {
//     for (let i = 0; i < env.length + 1; i++) {
//         cnv.moveTo(0, i*30)
//         cnv.lineTo(30 * env[0].length, i*30)
//         cnv.stroke()
//     }
//     for (let j = 0; j < env[0].length + 1; j++) {
//         cnv.moveTo(30 * j, 0)
//         cnv.lineTo(30 * j, env.length * 30)
//         cnv.stroke()
//     }
// }


// function draw_filled_cells(ls) {  //ОТРИСОВКА ЗАПОЛНЕНЫХ КЛЕТОК
//     for (let i = 0; i < ls.length; i++) {
//         a = ls[i]
//         for (let j = 0; j < a.length; j++) {
//             b = a[j]
//             if (b == true) {
//                 cnv.fillStyle = blank.color
//                 cnv.fillRect(j * 30, i * 30, 30, 30)
//             }
//         }
//     }
// }


// function ex_del() {
//     for (let i = 0; i < coord.length; i++){
//         cords = coord[i]
//         env[coord[i][0]][coord[i][1]] = []
//         cnv.clearRect(cords[1] * 30, cords[0] * 30, 30, 30)
//         cnv.rect(cords[1] * 30, cords[0] * 30, 30, 30)
//         cnv.stroke()
//     }
// }

// function down(cords) {
//     let maxy = 0
//     for (let i = 0; i < cords; i++) {
//         maxy = Math.max(maxy, cords[i][0])
//         // if (cords[i][0] > maxy) {
//         //     maxy = cords[i][0]
//         // }
//     }
//     return maxy
// }

// function right(cords) {
//     let maxr = 0
//     for (let i = 0; i < cords; i++) {
//         if (cords[i][1] > maxy) {
//             maxr = cords[i][1]
//         }
//     }
//     return maxr
// }

// function left(cords) {
//     let maxl = env.length + 1
//     for (let i = 0; i < cords; i++) {
//         if (cords[i][1] < maxy) {
//             maxl = cords[i][1]
//         }
//     }
//     return maxl
// }


// function figure_move(event) //ПЕРЕДВИЖЕНИЕ ФИГУРЫ
// {
//     console.log(coord)
//     cords = coord
//     switch (event.code) {
//         case 'ArrowLeft':
//             if (left(cords) != 0) {
//                 ex_del()
//                 for (let i = 0; i < coord.length; i++){
//                     coord[i][1] = coord[i][1] - 1
//                     env[coord[i][0]][coord[i][1]] = 1
//                 }
//             }
//             break
//         case 'ArrowRight':
//             if (right(cords) != env[0].length - 1) {
//                 ex_del()
//                 for (let i = 0; i < coord.length; i++){
//                     coord[i][1] = coord[i][1] + 1
//                     env[coord[i][0]][coord[i][1]] = 1
//                 }
//             }
//             break

//         case 'ArrowUp':
//             if (cords[0] != 0) {
//                 line = env[cords[0]]
//                 line1 = env[cords[0] - 1]
//                 line[cords[1]] = []
//                 line1[cords[1]] = [1]
//                 env[cords[0]] = line
//                 env[cords[0] - 1] = line1
//                 console.log(coord)
//             }
//             break

//         case 'ArrowDown':
//             if (down(cords) <= env.length - 1) {
//                 downnn(cords)}
//             else {
//                 break
//             }
//             break
//         }


//     function downnn(cords) {
//         if (down(cords) != env.length - 1) {
//             ex_del()
//             for (let i = 0; i < coord.length; i++) {
//                 coord[i][0] = coord[i][0] + 1
//                 env[coord[i][0]][coord[i][1]] = 1
//             }
//         }
//     }
// }


// function animation() //ОТРИСОВКА ИГРОВОГО ПРОЦЕССА
// {
//     draw_filled_cells(env)
//     requestAnimationFrame(animation)
// }


// class blank //БАЛВАНКА ДЛЯ СОЗДАНИЯ НОВЫХ ФИГУР
// {
//     constructor(options) {
//         this.size = [1]
//         this.color = 'rgb(0, 0, 0)'
//     }
// }

// function creating_figure() {
//     switch (figures[getRandomInt(0, figures.length - 1)])
//     {  
//         case 'j':
//             blank.size = [[[1], [], []], [[1], [1], [1]]]
//             blank.color = 'rgb(0, 0, 255)'
//             actual_figure = blank.size
//             break
//         case 'i':
//             blank.size = [[[1]], [[1]], [[1]], [[1]]]
//             blank.color = 'rgb(0, 255, 255)'
//             actual_figure = blank.size
//             break
//         case 'o':
//             blank.size = [[[1], [1]], [[1], [1]]]
//             blank.color = 'rgb(255, 255, 0)'
//             actual_figure = blank.size
//             break
//         case 'l':
//             blank.size = [[[], [], [1]], [[1], [1], [1]]]
//             blank.color = 'rgb(255, 127, 0)'
//             actual_figure = blank.size
//             break
//         case 'z':
//             blank.size = [[[1], [1], []], [[], [1], [1]]]
//             blank.color = 'rgb(255, 0, 0)'
//             actual_figure = blank.size
//             break
//         case 't':
//             blank.size = [[[], [1], []], [[1], [1], [1]]]
//             blank.color = 'rgb(128, 0, 128)'
//             actual_figure = blank.size
//             break
//         case 's':
//             blank.size = [[[], [1], [1]], [[1], [1], []]]
//             blank.color = 'rgb(0, 255, 0)'
//             actual_figure = blank.size
//             break
//     }
// }


// function input_blank() {
//     for (let y = 0; y < blank.size.length; y++) {
//         for (let x = 0; x < blank.size[y].length; x++) {
//             env[y][3 + x] = blank.size[y][x]
//             if (blank.size[y][x] == true) {
//                 coord.push([y, x + 3])
//             }
//         }
//     }
// }


// function START_GAME() //ИНИЦИАЛИЗАЦИЯ НАЧАЛА ИГРЫ
// {
//     draw_env() //ОТРИСОВКА ОКРУЖЕНИЯ
    
//     // ГЕНЕРАЦИЯ НОВОГО ОБЪЕКТА 
//     creating_figure() // ПОЛУЧЕНИЕ БАЛВАНКИ
//     input_blank() // ВСТАВКА БОЛВАНКИ В ОКРУЖЕНИЕ
//     // ПРОВЕРКА НА СТРОКУ
//     // ГРАВИТАЦИЯ


//     setTimeout(animation(), 50)
    
//     window.addEventListener("keydown", figure_move)
// }


// START_GAME()


let canvas = document.getElementById('canvas')
let cnv = canvas.getContext('2d')
let cords, line, line2
let figures = ['j', 'i', 'o', 'l', 'z', 't', 's']
let actual_figure = []
let coord = []
let env = Array.from({ length: 20 }, () => Array(10).fill(0))
let currentFigure, currentColor, currentX, currentY
let gameInterval

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
                console.log(env)
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
    outer: for (let y = env.length - 1; y >= 0; y--) {
        for (let x = 0; x < env[y].length; x++) {
            if (env[y][x] === 0) {
                continue outer
            }
        }
        env.splice(y, 1)
        env.unshift(Array(10).fill(0))
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