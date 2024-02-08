var canvas = document.getElementById('canvas')
var cnv = canvas.getContext('2d')
let cords, line, line2
let figures = ['j', 'i', 'o', 'l', 'z', 't', 's']


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function find_p() {
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


function draw_env() {
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

function draw_p(ls) {
    for (let i = 0; i < ls.length; i++) {
        a = ls[i]
        for (let j = 0; j < a.length; j++) {
            b = a[j]
            if (b == true) {
                cnv.fillStyle = balvan.color
                cnv.fillRect(j * 30, i * 30, 30, 30)
            }
        }
    }
}

function f_move(event) {
    cords = find_p()
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

function animation() {
    draw_p(env)
    requestAnimationFrame(animation)
}

function set_value_to_ENV(arg){

}

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



class balvan {
    constructor(options) {
        this.size = [1]
        this.color = 'rgb(0, 0, 0)'
    }
}





function START_GAME(){
    draw_env()
    // TODO
    
    // ПОЛУЧЕНИЕ БАЛВАНКИ
    switch (figures[getRandomInt(1, figures.length - 1)]) {
        case 'j':
            balvan.size = [[[1], [], []], [[1], [1], [1]]]
            balvan.color = 'rgb(0, 0, 255)'
            break
        case 'i':
            balvan.size = [[[1]], [[1]], [[1]], [[1]]]
            balvan.color = 'rgb(0, 255, 255)'
            break
        case 'o':
            balvan.size = [[[1], [1]], [[1], [1]]]
            balvan.color = 'rgb(255, 255, 0)'
            break
        case 'l':
            balvan.size = [[[], [], [1]], [[1], [1], [1]]]
            balvan.color = 'rgb(255, 127, 0)'
            break
        case 'z':
            balvan.size = [[[1], [1], []], [[], [1], [1]]]
            balvan.color = 'rgb(255, 0, 0)'
            break
        case 't':
            balvan.size = [[[], [1], []], [[1], [1], [1]]]
            balvan.color = 'rgb(128, 0, 128)'
            break
        case 's':
            balvan.size = [[[], [1], [1]], [[1], [1], []]]
            balvan.color = 'rgb(0, 255, 0)'
            break
    }
    // ЗАМЕНА 1 НА БАЛВАНКУ
    console.log(balvan.size)
    for (let i = 0; i < balvan.size.length; i++) {
        for (let j = 0; j < balvan.size[i].length; j++) {
            env[i][3 + j] = balvan.size[i][j]
        }
    }
    
    // ГЕНЕРАЦИЯ НОВОГО ОБЪЕКТА 


    // ПРОВЕРКА НА СТРОКУ

    setTimeout(animation(), 50)
    window.addEventListener("keydown", f_move)
}

START_GAME()    