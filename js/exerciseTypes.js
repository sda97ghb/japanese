class CardsExercise {
    constructor(exercise) {
        this.cards = exercise.cards;
        this.currentCardIdx = 0;
        if (exercise.shuffleFirstTime) {
            this.shuffle();
        }
        this.shuffleOtherTimes = exercise.shuffleOtherTimes;
    }

    nextCard() {
        if (this.cards.length === 0) {
            return {
                "word": "empty",
                "translation": "This exercise"
            }
        }
        else {
            if (this.currentCardIdx >= this.cards.length) {
                this.currentCardIdx = 0;
                if (this.shuffleOtherTimes) {
                    this.shuffle();
                }
            }
            let card = this.cards[this.currentCardIdx];
            this.currentCardIdx += 1;
            return card;
        }
    }

    shuffle() {
        this.cards = shuffle(this.cards);
    }
}

function makeExercise(exercise) {
    switch (exercise.type) {
        case "cards":
            return new CardsExercise(exercise);
        default:
            return null;
    }
}
