<script setup>
defineProps(['question', 'questions', 'characters', 'correctAnswer', 'gameLog', 'stats'])
</script>

<template>
    <li>
        <button v-on:click="() => { askQuestion(question, characters, correctAnswer) }"
            v-if="!question.isAnswered && !question.isHidden">
            <p>{{ question.text }}</p>
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
        askQuestion(question, characters, correctAnswer) {
            if (!this.stats.gameOver) {
                this.updateStats()
            }
            let correctAnswerIncludesTag = false
            let answer = ''
            this.question.isAnswered = true;

            for (let i = 0; i < correctAnswer.tags.length; i++) {
                if (correctAnswer.tags[i] === question.tag) {
                    correctAnswerIncludesTag = true
                }
            }

            if (correctAnswerIncludesTag) {
                this.closeAllWithoutTag(characters, question.tag)
                // this.closeUselessQuestionsOnCorrect(question.type)
                answer = 'Yes'
            } else {
                this.closeAllWithTag(characters, question.tag)
                // this.closeUselessQuestionsOnWrong(question.type)
                answer = 'No'
            }

            this.closeRedundantQuestionBasedOnRemainingTags()

            this.gameLog.push({ question, answer });
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

        closeRedundantQuestionsOnCorrect(type) {
            this.questions.forEach(question => {
                if (question.type === type) {
                    question.isAnswered = true
                }
            })
        },

        closeRedundantQuestionsOnWrong(type) {
            let questionsLeft = 0;
            // Count how many questions are left
            this.questions.forEach(question => {
                if (question.type === type && question.isAnswered === false) {
                    questionsLeft++
                }
            })

            // If there are only 1 question left, close it
            this.questions.forEach(question => {
                if (question.type === type && question.isAnswered === false) {
                    if (questionsLeft === 1) {
                        question.isAnswered = true
                    }
                }
            })
        },

        closeRedundantQuestionBasedOnRemainingTags() {

            let remainingTags = this.characters.filter(character => character.isHidden === false).map(character => character.tags).flat()
            console.log(remainingTags)

            let updatedQuestions = this.questions

            updatedQuestions.forEach(question => {

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

            this.questions = updatedQuestions
        },
    },
}
</script>

<style>
#myUL li button {
    border: 1px solid #ddd;
    background-color: #28282b;

    margin-top: -1px;
    padding: 12px;
    padding-right: 50px;

    text-decoration: none;
    font-size: 18px;
    /*Seth was here*/

    display: block;
    size: 100%;
    width: 100%;

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
