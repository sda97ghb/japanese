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

function makeExerciseUI(exerciseData) {
    switch (exerciseData.type) {
        case "cards":
            return new UICardsExercise(exerciseData);
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
