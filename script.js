let canvas = document.getElementById('canvas')
let cnv = canvas.getContext('2d')
let cords, line, line2
let figures = ['j', 'i', 'o', 'l', 'z', 't', 's']
let actual_figure = []
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


function figure_move(event) //ПЕРЕДВИЖЕНИЕ ФИГУРЫ
{
    cords = find_filled_cells()
    cnv.clearRect(cords[1] * 30, cords[0] * 30, 30, 30)
    cnv.rect(cords[1] * 30, cords[0] * 30, 30, 30)
    cnv.stroke()
    switch (event.code) {
        case 'ArrowLeft':
            if (cords[1] != 0) {
                line = env[cords[0]]
                line[cords[1]] = []
                line[cords[1] - 1] = [1]
            }
            break
        case 'ArrowRight':
            if (cords[1] != env[0].length - 1) {
                line = env[cords[0]]
                line[cords[1]] = []
                line[cords[1] + 1] = [1]
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
            }
            break

        case 'ArrowDown':
            if (cords[0] != env.length - 1) {
                line = env[cords[0]]
                line1 = env[cords[0] + 1]
                line[cords[1]] = []
                line1[cords[1]] = [1]
                env[cords[0]] = line
                env[cords[0] + 1] = line1
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


function input_blank() {
    for (let y = 0; y < blank.size.length; y++) {
        for (let x = 0; x < blank.size[y].length; x++) {
            if (blank.size[y][x] != []) {
                env[y][3 + x] = blank.size[y][x]
                // actual_figure.push([])
            }
        }
    }
}


function START_GAME() //ИНИЦИАЛИЗАЦИЯ НАЧАЛА ИГРЫ
{
    draw_env() //ОТРИСОВКА ОКРУЖЕНИЯ
    creating_figure() // ПОЛУЧЕНИЕ БАЛВАНКИ
    input_blank() // ВСТАВКА БОЛВАНКИ В ОКРУЖЕНИЕ
    
    // ГЕНЕРАЦИЯ НОВОГО ОБЪЕКТА 


    // ПРОВЕРКА НА СТРОКУ

    setTimeout(animation(), 50)
    window.addEventListener("keydown", figure_move)
}


START_GAME()