class UIExerciseListItem {
    constructor(exerciseData) {
        this.element = $(`
                <a
                    class="list-group-item list-group-item-action"
                    id="exerciseList${exerciseData.id}"
                    data-toggle="list"
                    href="#exercise${exerciseData.id}"
                    role="tab"
                    aria-controls="exercise${exerciseData.id}"
                >${exerciseData.name}</a>
            `);
        this.element.data("controller", this);
    }
}


class UIExerciseList {
    constructor() {
        this.exerciseList = $("#exerciseList");
        this.exerciseList.data("controller", this);
    }

    populateList(exercises) {
        for (const exerciseData of exercises) {
            let item = new UIExerciseListItem(exerciseData);
            item.element.appendTo(this.exerciseList);
        }
    }
}


class UICardsExercise {
    constructor(exerciseData) {
        this.exercise = makeExercise(exerciseData);
        this.currentCard = this.exercise.nextCard();
        this.isWordVisible = false;

        this.exerciseElement = $(`
            <div class="h-100 tab-pane fade container-fluid" id="exercise${exerciseData.id}" role="tabpanel" aria-labelledby="exerciseList${exerciseData.id}">
                <div class="row h-100 align-items-center">
                    <div class="card col-8 m-auto shadow pt-5 pb-3" style="width: 18rem;">
                        <div class="card-body">
                            <div class="exercise-card-translation exercise-card-primary-${exerciseData.translationLanguage} text-center">${this.currentCard.translation}</div>
                            <div class="exercise-card-secondary text-center">is</div>
                            <div class="exercise-card-word exercise-card-primary-${exerciseData.wordLanguage} text-center">?</div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        this.exerciseElement.data("controller", this);

        this.translationElement = $(".exercise-card-translation", this.exerciseElement);
        this.wordElement = $(".exercise-card-word", this.exerciseElement);

        $(".card", this.exerciseElement).on("click", () => this.onCardClicked());
    }

    onCardClicked() {
        if (this.isWordVisible) {
            this.currentCard = this.exercise.nextCard();
            this.translationElement.text(this.currentCard.translation);
            this.wordElement.text("?")
            this.isWordVisible = false;
        }
        else {
            this.wordElement.text(this.currentCard.word);
            this.isWordVisible = true;
        }
    }
}


class UIPickASequenceExercise {
    constructor(exerciseData) {
        this.exercise = makeExercise(exerciseData);

        this.exerciseElement = $(`
            <div class="h-100 tab-pane fade container-fluid" id="exercise${exerciseData.id}" role="tabpanel" aria-labelledby="exerciseList${exerciseData.id}">
                <div class="row h-100 align-items-center">
                    <div class="card col-8 m-auto shadow pt-5 pb-3">
                        <div class="card-body container-fluid">
                            <div class="row align-items-center">
                                <div class="col-auto mx-auto sequence-sequence sequence-sequence-${exerciseData.sequenceLanguage}">
                                    ${this.sequenceHtml}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-auto mx-auto sequence-transcription sequence-transcription-${exerciseData.transcriptionLanguage}">
                                    ${this.transcriptionHtml}
                                </div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-auto mx-auto sequence-translation sequence-translation-${exerciseData.translationLanguage}">
                                    ${this.translationHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
        this.exerciseElement.data("controller", this);

        this.sequenceElement = $(".sequence-sequence", this.exerciseElement);
        this.transcriptionElement = $(".sequence-transcription", this.exerciseElement);
        this.translationElement = $(".sequence-translation", this.exerciseElement);

        let self = this;
        this.transcriptionElement.on("click", ".sequence-transcription-variant", function () {
            let transcriptionElement = $(this);
            self.onTranscriptionClicked(transcriptionElement.text(), transcriptionElement);
        });

        this.translationElement.on("click", () => this.onTranslationClicked());
    }

    get sequenceHtml() {
        let sequence = this.exercise.currentSequence.sequence;
        let suffix = this.exercise.currentSequence.suffix ?? "";
        let idx = this.exercise.currentCharacterIdx;

        let beforeCurrentCharacter = sequence.slice(0, idx);
        let currentCharacter = sequence[idx];
        let afterCurrentCharacter = sequence.slice(idx + 1);

        if (beforeCurrentCharacter.join !== undefined) {
            beforeCurrentCharacter = beforeCurrentCharacter.join("");
        }
        if (afterCurrentCharacter.join !== undefined) {
            afterCurrentCharacter = afterCurrentCharacter.join("");
        }

        return `
            ${beforeCurrentCharacter}
            <span class="current-character">${currentCharacter}</span>
            ${afterCurrentCharacter}
            ${suffix}
        `;
    }

    get completeSequenceHtml() {
        let sequence = this.exercise.currentSequence.sequence;
        if (sequence.join !== undefined) {
            sequence = sequence.join("");
        }
        let suffix = this.exercise.currentSequence.suffix ?? "";
        return sequence + suffix;
    }

    get transcriptionHtml() {
        let beforeCurrent = this.exercise.currentSequence.transcription.slice(0, this.exercise.currentCharacterIdx);
        if (beforeCurrent.join !== undefined) {
            beforeCurrent = beforeCurrent.join("");
        }
        beforeCurrent += ` <span style="color: red;">?</span>`;
        let buttons = this.exercise.currentCharacterTranscriptions.map(transcription => `
            <div class="d-inline-block px-3 rounded sequence-transcription-variant">${transcription}</div>
        `).join("");
        return `<span style="margin-right: 1rem;">${beforeCurrent}</span>←${buttons}`
    }

    get completeTranscriptionHtml() {
        return this.exercise.currentSequence.transcription;
    }

    get translationHtml() {
        return `<span class="sequence-next-sequence-button">Skip →</span>`;
    }

    get completeTranslationHtml() {
        return `
            <span style="margin-left: 4rem;">&#x1f389;</span>
            ${this.exercise.currentSequence.translation}
            <span class="sequence-next-sequence-button">Next →</span>
        `;
    }

    onTranscriptionClicked(transcription, transcriptionElement) {
        if (this.exercise.testTranscription(transcription)) {
            if (this.exercise.hasNextCharacter) {
                this.exercise.nextCharacter();
                this.sequenceElement.html(this.sequenceHtml);
                this.transcriptionElement.html(this.transcriptionHtml);
            }
            else {
                this.sequenceElement.html(this.completeSequenceHtml);
                this.transcriptionElement.html(this.completeTranscriptionHtml);
                this.translationElement.html(this.completeTranslationHtml);
            }
        }
        else {
            transcriptionElement.css("background", "red");
        }
    }

    onTranslationClicked() {
        this.exercise.nextSequence();
        this.sequenceElement.html(this.sequenceHtml);
        this.transcriptionElement.html(this.transcriptionHtml);
        this.translationElement.html(this.translationHtml);
    }
}


function makeExerciseUI(exerciseData) {
    switch (exerciseData.type) {
        case "cards":
            return new UICardsExercise(exerciseData);
        case "pick-a-sequence":
            return new UIPickASequenceExercise(exerciseData);
        default:
            return null;
    }
}


class UIExerciseContent {
    constructor() {
        this.exerciseContent = $("#exerciseContent");
        this.exerciseContent.data("controller", this);
    }

    populateContent(exercises) {
        for (const exerciseData of exercises) {
            let exerciseUI = makeExerciseUI(exerciseData);
            exerciseUI.exerciseElement.appendTo(this.exerciseContent);
        }
    }
}


class App {
    constructor() {
        this.exerciseList = new UIExerciseList();
        this.exerciseContent = new UIExerciseContent();
    }

    populate(exercises) {
        this.exerciseList.populateList(exercises);
        this.exerciseContent.populateContent(exercises);
    }
}
