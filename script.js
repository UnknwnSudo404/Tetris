let canvas = document.getElementById('canvas')
let cnv = canvas.getContext('2d')
let cords, line, line2
let figures = ['j', 'i', 'o', 'l', 'z', 't', 's']
let actual_figure = []
let coord = []
let env = [[[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []],
          [[], [], [] ,[] ,[] ,[] ,[] ,[], [], []]]


function getRandomInt(min, max) //ПОЛУЧЕНИЕ РАНДОМНОГО ЧИСЛА
{ 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function find_filled_cells() //НАХОЖДЕНИЕ КООРДИНАТ ЗАПОЛНЕННОЙ КЛЕТКИ
{
    for (let i = 0; i < env.length; i++) {
        a = env[i]
        for (let j = 0; j < a.length; j++) {
            b = a[j]
            if (b[0] == 1) {
                return [i, j]
            }
        }
    }
}


function draw_env() //ОТРИСОВКА ОКРУЖЕНИЯ
{
    for (let i = 0; i < env.length + 1; i++) {
        cnv.moveTo(0, i*30)
        cnv.lineTo(30 * env[0].length, i*30)
        cnv.stroke()
    }
    for (let j = 0; j < env[0].length + 1; j++) {
        cnv.moveTo(30 * j, 0)
        cnv.lineTo(30 * j, env.length * 30)
        cnv.stroke()
    }
}


function draw_filled_cells(ls) {  //ОТРИСОВКА ЗАПОЛНЕНЫХ КЛЕТОК
    for (let i = 0; i < ls.length; i++) {
        a = ls[i]
        for (let j = 0; j < a.length; j++) {
            b = a[j]
            if (b == true) {
                cnv.fillStyle = blank.color
                cnv.fillRect(j * 30, i * 30, 30, 30)
            }
        }
    }
}


function ex_del() {
    for (let i = 0; i < coord.length; i++){
        cords = coord[i]
        env[coord[i][0]][coord[i][1]] = []
        cnv.clearRect(cords[1] * 30, cords[0] * 30, 30, 30)
        cnv.rect(cords[1] * 30, cords[0] * 30, 30, 30)
        cnv.stroke()
    }
}

function down(cords) {
    let maxy = 0
    for (let i = 0; i < cords; i++) {
        if (cords[i][0] > maxy) {
            maxy = cords[i][0]
        }
    }
    return maxy

}
function right(cords) {
    let maxr = 0
    for (let i = 0; i < cords; i++) {
        if (cords[i][1] > maxy) {
            maxr = cords[i][1]
        }
    }
    return maxr

}
function left(cords) {
    let maxl = env.length + 1
    for (let i = 0; i < cords; i++) {
        if (cords[i][1] < maxy) {
            maxl = cords[i][1]
        }
    }
    return maxl
}


function figure_move(event) //ПЕРЕДВИЖЕНИЕ ФИГУРЫ
{
    cords = coord
    switch (event.code) {
        case 'ArrowLeft':
            if (left(cords) != 0) {
                ex_del()
                for (let i = 0; i < coord.length; i++){
                    coord[i][1] = coord[i][1] - 1
                    env[coord[i][0]][coord[i][1]] = 1
                }
            }
            break
        case 'ArrowRight':
            if (right(cords) != env[0].length - 1) {
                ex_del()
                for (let i = 0; i < coord.length; i++){
                    coord[i][1] = coord[i][1] + 1
                    env[coord[i][0]][coord[i][1]] = 1
                }
            }
            break

        case 'ArrowUp':
            if (cords[0] != 0) {
                line = env[cords[0]]
                line1 = env[cords[0] - 1]
                line[cords[1]] = []
                line1[cords[1]] = [1]
                env[cords[0]] = line
                env[cords[0] - 1] = line1
                console.log(coord)
            }
            break

        case 'ArrowDown':
            if (down(cords) != env.length - 1) {
                ex_del()
                for (let i = 0; i < coord.length; i++) {
                    coord[i][0] = coord[i][0] + 1
                    env[coord[i][0]][coord[i][1]] = 1
                }
            }
            break
        }

}


function animation() //ОТРИСОВКА ИГРОВОГО ПРОЦЕССА
{
    draw_filled_cells(env)
    requestAnimationFrame(animation)
}


class blank //БАЛВАНКА ДЛЯ СОЗДАНИЯ НОВЫХ ФИГУР
{
    constructor(options) {
        this.size = [1]
        this.color = 'rgb(0, 0, 0)'
    }
}

function creating_figure() {
    switch (figures[getRandomInt(1, figures.length - 1)])
    {  
        case 'j':
            blank.size = [[[1], [], []], [[1], [1], [1]]]
            blank.color = 'rgb(0, 0, 255)'
            actual_figure = blank.size
            break
        case 'i':
            blank.size = [[[1]], [[1]], [[1]], [[1]]]
            blank.color = 'rgb(0, 255, 255)'
            actual_figure = blank.size
            break
        case 'o':
            blank.size = [[[1], [1]], [[1], [1]]]
            blank.color = 'rgb(255, 255, 0)'
            actual_figure = blank.size
            break
        case 'l':
            blank.size = [[[], [], [1]], [[1], [1], [1]]]
            blank.color = 'rgb(255, 127, 0)'
            actual_figure = blank.size
            break
        case 'z':
            blank.size = [[[1], [1], []], [[], [1], [1]]]
            blank.color = 'rgb(255, 0, 0)'
            actual_figure = blank.size
            break
        case 't':
            blank.size = [[[], [1], []], [[1], [1], [1]]]
            blank.color = 'rgb(128, 0, 128)'
            actual_figure = blank.size
            break
        case 's':
            blank.size = [[[], [1], [1]], [[1], [1], []]]
            blank.color = 'rgb(0, 255, 0)'
            actual_figure = blank.size
            break
    }
}


// function input_blank() {
//     for (let y = 0; y < blank.size.length; y++) {
//         for (let x = 0; x < blank.size[y].length; x++) {
//             if (blank.size[y][x] != []) {
//                 env[y][3 + x] = blank.size[y][x]
//                 if (blank.size != []) {
//                     coord.push([y, 3 + x])
//                 }
//                 console.log(coord)
//             }
//         }
//     }
// }


function input_blank() {
    for (let y = 0; y < blank.size.length; y++) {
        for (let x = 0; x < blank.size[y].length; x++) {
            env[y][3 + x] = blank.size[y][x]
            if (blank.size[y][x] == true) {
                coord.push([y, x + 3])
            }
        }
    }
}


function START_GAME() //ИНИЦИАЛИЗАЦИЯ НАЧАЛА ИГРЫ
{
    draw_env() //ОТРИСОВКА ОКРУЖЕНИЯ
    
    // ГЕНЕРАЦИЯ НОВОГО ОБЪЕКТА 
    creating_figure() // ПОЛУЧЕНИЕ БАЛВАНКИ
    input_blank() // ВСТАВКА БОЛВАНКИ В ОКРУЖЕНИЕ
    // ПРОВЕРКА НА СТРОКУ
    // ГРАВИТАЦИЯ


    setTimeout(animation(), 50)
    window.addEventListener("keydown", figure_move)
}


START_GAME()