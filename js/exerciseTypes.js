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
                "translation": "This exercise",
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


const EMPTY_SEQUENCE = {
    "sequence": [],
    "transcription": [],
    "translation": "",
};


class PickASequenceExercise {
    constructor(exercise) {
        this.sequences = exercise.sequences;
        this.alphabet = exercise.alphabet;
        this.suggestCurrentCharacterTranscriptions = exercise.suggestCurrentCharacterTranscriptions;

        this.shuffle();

        this.currentSequenceIdx = 0;
        this.currentCharacterIdx = 0;
    }

    get currentSequence() {
        if (this.sequences.length === 0) {
            return EMPTY_SEQUENCE;
        }
        else {
            return this.sequences[this.currentSequenceIdx];
        }
    }

    nextSequence() {
        if (this.currentSequenceIdx >= this.sequences.length) {
            this.currentSequenceIdx = -1;
            this.shuffle();
        }
        this.currentSequenceIdx += 1;
        this.currentCharacterIdx = 0;
        return this.currentSequence;
    }

    get correctCurrentCharacterTranscription() {
        return this.currentSequence.transcription[this.currentCharacterIdx];
    }

    // get currentCharacter() {
    //     return this.currentSequence.sequence[this.currentCharacterIdx];
    // }

    get currentCharacterTranscriptions() {
        let correctTranscription = this.correctCurrentCharacterTranscription;
        let wrongTranscriptions = shuffle(this.alphabet).slice(0, this.suggestCurrentCharacterTranscriptions - 1);
        return shuffle([correctTranscription, ...wrongTranscriptions]);
    }

    testTranscription(transcription) {
        return transcription === this.correctCurrentCharacterTranscription;
    }

    get hasNextCharacter() {
        return this.currentCharacterIdx < this.currentSequence.sequence.length - 1;
    }

    nextCharacter() {
        if (this.currentCharacterIdx >= this.currentSequence.sequence.length) {
            this.currentCharacterIdx = 0;
        }
        else {
            this.currentCharacterIdx += 1;
        }
    }

    shuffle() {
        this.sequences = shuffle(this.sequences);
    }
}

function makeExercise(exercise) {
    switch (exercise.type) {
        case "cards":
            return new CardsExercise(exercise);
        case "pick-a-sequence":
            return new PickASequenceExercise(exercise);
        default:
            return null;
    }
}
