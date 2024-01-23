<script setup>
defineProps(['question', 'questions', 'characters', 'correctAnswer', 'gameLog', 'stats'])
</script>

<template>
    <li>
        <a v-on:click="() => { askQuestion(question, characters, correctAnswer, gameLog) }"
            v-if="!question.isAnswered && !question.isHidden">
            <p>{{ question.text }}</p>
        </a>
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
            this.updateStats()
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
                this.closeUselessQuestionsOnCorrect(question.type)
                answer = 'Yes'
            } else {
                this.closeAllWithTag(characters, question.tag)
                this.closeUselessQuestionsOnWrong(question.type)
                answer = 'No'
            }

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

        closeUselessQuestionsOnCorrect(type) {
            this.questions.forEach(question => {
                if (question.type === type) {
                    question.isAnswered = true
                }
            })
        },

        closeUselessQuestionsOnWrong(type) {
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
    },
}
</script>

<style>
#myUL li a {
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
}

#myUL li:hover {
    background-color: #505050;
}

a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}

a:hover {
    color: #535bf2;
}
</style>
