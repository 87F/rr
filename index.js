// let's make a game

const random_number = (min,max) => ~~( Math.random() * (max - min)) + min

const number_of_dots = 6;
const main = document.getElementById('main')

function Roulette () {

    let dots = [0, 0,  0, 0, 0,0];
    dots[random_number(0, number_of_dots)] = 1;
    console.log(dots)

    this.init = () => {
        for (let i = 0; i < number_of_dots; i++) {
            const div = document.createElement('div')
            div.id = `dot-${i}`
            div.dataset.position = i;
            main.append(div)
        }
    }

    this.flip = (position) => {
        const dot = document.getElementById(`dot-${position}`)

        if (dots[position]) {
            dot.style.backgroundColor = '#ee3322';
            alert('BOOM!');
            return
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

game.init();