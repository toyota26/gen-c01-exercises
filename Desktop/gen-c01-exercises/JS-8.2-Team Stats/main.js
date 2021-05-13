const team = {
    _players: [{
            firstName: 'Cristiano',
            lastName: 'Ronaldo',
            age: 36
        },
        {
            firstName: 'Lionel',
            lastName: 'Messi',
            age: 34
        },
        {
            firstName: 'Toyota',
            lastName: 'Li',
            age: 27
        },
    ],
    _games: [{
            opponent: 'Two Steps',
            teampoints: 90,
            opponentPoints: 70
        },
        {
            opponent: 'From Hell',
            teampoints: 50,
            opponentPoints: 60
        },
        {
            opponent: 'Two Steps From Hell',
            teampoints: 0,
            opponentPoints: 147
        },
    ],

    get games() {
        return this._games;
    },
    get players() {
        return this._players;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age,
        };

        this.players.push(player);
    },


};

team.addPlayer("Steph", "Curry", 28)
team.addPlayer("Lisa", "Leslie", 44)
team.addPlayer("Bugs", "Bunny", 76)