<script setup>
defineProps(['question', 'characters', 'correctAnswer', 'gameLog', 'stats'])
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
        askQuestion(question, characters, correctAnswer, gameLog) {
            this.updateStats()
            let correctAnswerIncludesTag = false
            let answer = ''

            for (let i = 0; i < correctAnswer.tags.length; i++) {
                if (correctAnswer.tags[i] === question.tag) {
                    correctAnswerIncludesTag = true
                }
            }

            if (correctAnswerIncludesTag) {
                this.closeAllWithoutTag(characters, question.tag)
                answer = 'Yes'
            } else {
                this.closeAllWithTag(characters, question.tag)
                answer = 'No'
            }

            console.log(answer)

            this.gameLog.push({ question, answer });
            this.question.isAnswered = true;
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
