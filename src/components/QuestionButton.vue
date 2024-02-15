<script setup>
defineProps(['question', 'game', 'stats'])
</script>

<template>
    <li>
        <button v-on:click="() => { askQuestion() }" v-if="!question.isAnswered && !question.isHidden">
            <h3>{{ question.text }}</h3>
        </button>
    </li>
</template>

<script>

export default {
    methods: {
        updateStats() {
            this.stats.questionsAsked++
            if (this.stats.time === 0) {
                this.stats.time = Date.now()
            }
        },
        askQuestion() {
            if (this.stats.replay || this.stats.gameOver) {
                return
            }

            this.updateStats()
            let correctAnswerIncludesTag = false
            let answer = ''
            this.question.isAnswered = true;

            for (let i = 0; i < this.game.correctAnswer.tags.length; i++) {
                if (this.game.correctAnswer.tags[i] === this.question.tag) {
                    correctAnswerIncludesTag = true
                }
            }

            if (correctAnswerIncludesTag) {
                this.closeAllWithoutTag(this.game.characters, this.question.tag)
                answer = 'Yes'
            } else {
                this.closeAllWithTag(this.game.characters, this.question.tag)
                answer = 'No'
            }

            this.closeRedundantQuestions()

            if (this.game.characters.filter(character => character.isHidden === false).length === 1) {
                this.closeAllQuestions()
            }

            this.game.gameLog.push({ question: this.question, answer });
        },

        closeAllWithTag(characters, tag) {
            characters.forEach(character => {
                for (let i = 0; i < character.tags.length; i++) {
                    if (character.tags[i] === tag) {
                        character.isHidden = true
                    }
                }
            })
        },

        closeAllWithoutTag(characters, tag) {
            characters.forEach(character => {
                let hasTag = false
                for (let i = 0; i < character.tags.length; i++) {
                    if (character.tags[i] === tag) {
                        hasTag = true
                    }
                }

                if (!hasTag) {
                    character.isHidden = true
                }
            })
        },

        // WIP, unused
        closeQuestionsBasedOnQuestionTypePreferences(typeToClose) {
            this.game.questions.forEach(question => {
                let questionIsPrefered = true

                for (let i = 0; i < question.type.length; i++) {
                    if (question.type[i] === typeToClose) {
                        questionIsPrefered = false
                    }
                }

                if (questionIsPrefered === false) {
                    question.isAnswered = true
                }
            })
        },

        // If all remaining characters have the same tag, close all questions with that tag
        closeRedundantQuestions() {
            const remainingTags = this.game.characters.filter(character => character.isHidden === false).map(character => character.tags).flat()

            this.game.questions.forEach(question => {
                let questionIsRelevant = false

                for (let i = 0; i < remainingTags.length; i++) {
                    if (question.tag === remainingTags[i]) {
                        questionIsRelevant = true
                    }
                }

                if (questionIsRelevant === false) {
                    question.isAnswered = true
                }
            })

            const charsLeft = this.game.characters.filter(character => character.isHidden === false)
            this.game.questions.forEach(question => {
                let counter = 0
                charsLeft.forEach(char => {
                    char.tags.forEach(tag => {
                        if (tag === question.tag) {
                            counter++
                        }
                    })
                })

                if (counter === charsLeft.length) {
                    question.isAnswered = true
                }
            })
        },

        closeAllQuestions() {
            this.game.questions.forEach(question => {
                question.isAnswered = true
            })
        },
    },
}
</script>

<style>
#myUL li button {
    border: 1px solid #ddd;
    background-color: #28282b;

    margin-top: -1px;
    padding: 5px;

    text-decoration: none;
    font-size: 18px;
    /*Seth was here*/

    display: block;
    size: 100%;
    width: 100%;
}

#myUL li button h3 {
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-size: 1.3rem;
}

#myUL li:hover {
    background-color: #505050;
}

button {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}

button:hover {
    color: #535bf2;
}
</style>
