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

    Question() {
        const answer = prompt('Which way? ').toUpperCase();
        switch (answer) {
            case 'U':
                this.vertical -= 1;
                break;
            case 'D':
                this.vertical += 1;
                break;
            case 'L':
                this.horizontal -= 1;
                break;
            case 'R':
                this.horizontal += 1;
                break;
            default:
                console.log('Please enter U, D, L or R.');
                this.Question();
                break;
        }
    }

    Boundary() {
        return (
            this.vertical >= 0 &&
            this.horizontal >= 0 &&
            this.vertical < this.field.length &&
            this.horizontal < this.field[0].length
        );
    }

    Hole() {
        return this.field[this.vertical][this.horizontal] === hole;
    }

    Hat() {
        return this.field[this.vertical][this.horizontal] === hat;
    }

    print() {
        const String = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(String);
    }

    static generateField(height, width, percentage = 0.1) {
        const field = new Array(height).fill(0).map(el => new Array(width));
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const prob = Math.random();
                field[i][j] = prob > percentage ? fieldCharacter : hole;
            }
        }

        const hatLocation = {
            j: Math.floor(Math.random() * width),
            i: Math.floor(Math.random() * height)
        };

        while (hatLocation.j === 0 && hatLocation.i === 0) {
            hatLocation.j = Math.floor(Math.random() * width);
            hatLocation.i = Math.floor(Math.random() * height);
        }
        field[hatLocation.i][hatLocation.j] = hat;
        return field;
    }
}

const myfield = new Field(Field.generateField(10, 10, 0.2));
myfield.runGame();