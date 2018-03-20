class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.listOfScores = [];
    }

    get scoreCount() {
        return this.listOfScores.length
    }

    get highestScore() {
        return this.listOfScores[0];
    }

    get topFiveScore() {
        return this.listOfScores.slice(0, 5)
    }

    sort(){
        this.listOfScores.sort((a, b) => b - a);
    }

    addScore(score) {
        if (typeof score === 'number' || typeof score === 'string') {
            if (!isNaN(Number(score))) {
                this.listOfScores.push(Number(score));
                this.sort();
            }
        }
        return this;
    }

    toString() {
        if (this.scoreCount === 0) {
            return `${this.nickName}: []`
        }

        return `${this.nickName}: [${this.listOfScores}]`
    }
}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);

peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);


console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

console.log();
let maria = new Player("Maria")
    .addScore(350)
    .addScore(779)
    .addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);