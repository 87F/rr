// let's make a game

const number_of_dots = 6;
const main = document.getElementById('main')

function Roulette () {
    this.init = () => {
        for (let i = 0; i < number_of_dots; i++) {
            const div = document.createElement('div')
            main.append(div)
        }
    }
}

const game = new Roulette();

document.onclick = (e) => {
    const element = e.target;
    if (element.tagName === 'DIV') console.log('you clicked a dot')
}

game.init();