const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [
        []
    ]) {
        this.field = field;
        this.horizontal = 0;
        this.vertical = 0;
        this.field[0][0] = pathCharacter;
    }

    runGame() {
        let playing = true;
        while (playing) {
            this.print();
            this.Question();
            if (!this.Boundary()) {
                console.log('Out of boundary!');
                playing = false;
                break;
            } else if (this.Hole()) {
                console.log('Game over!');
                playing = false;
                break;
            } else if (this.Hat()) {
                console.log('You win!');
                playing = false;
                break;
            }

            this.field[this.vertical][this.horizontal] = pathCharacter;
        }
    }
}