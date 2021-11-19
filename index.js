// let's make a game

const random_number = (min,max) => ~~( Math.random() * (max - min)) + min

const number_of_dots = 6;
const main = document.getElementById('main')

function Roulette () {

    let dots = [];
    let tries = 0;
    let tried = new Set()

    this.init = () => {
        main.innerHTML = '';
        dots = [0, 0,  0, 0, 0,0];
        dots[random_number(0, number_of_dots)] = 1;
        tries = 0
        tried = new Set();


        for (let i = 0; i < number_of_dots; i++) {
            const div = document.createElement('div')
            div.id = `dot-${i}`
            div.dataset.position = i;
            main.append(div)
        }
    }

    this.flip = (position) => {
        const dot = document.getElementById(`dot-${position}`)

        tries++;
        tried.add(position)

        if (dots[position]) {
            dot.style.backgroundColor = '#ee3322';
            alert('BOOM!');
            this.init();
            return
        } else {
            dot.style.backgroundColor = '#ffffff'
        }

        if (tries === number_of_dots - 1) {
            alert('you win!')
            this.init()
        }
    }
}

const game = new Roulette();

document.onclick = (e) => {
    const element = e.target;
    if (element.tagName === 'DIV') {
        console.log(`you clicked dot - ${element.id}`)
        game.flip(+element.dataset.position)
    }
}

document.onkeydown = ({ key}) => {
    switch(key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6': {
            game.flip(+key - 1);
            break;
        }

        default: return
    }
}

game.init();