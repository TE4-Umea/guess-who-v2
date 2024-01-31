<script setup>
defineProps(['stats', 'game', 'character'])
</script>

<template>
    <div :id="[character.id]" :class="[{ backsideAnimation: character.isHidden }]"
        v-on:click="Guess()" class="characterCard" :title="'Guess on ' + character.name + '?'">

        <!-- Get class 'backsideAnimation' if isHidden is true -->
        <div class="imgWrapper">
            <img :src="character.image" alt="">
        </div>
        <h3>{{ character.name }}</h3>
    </div>
</template>

<script>
export default {
    methods: {
        Guess() {
            if (this.stats.replay || this.stats.gameOver || this.character.isHidden) {
                return
            }

            let correctGuess = 'Yes'
            if (this.stats.time === 0) {
                this.stats.time = Date.now()
            }

            this.stats.guesses++
            if (this.character.name === this.game.correctAnswer.name) {
                this.game.characters.forEach(character => {
                    if (character.name !== this.game.correctAnswer.name) {
                        character.isHidden = true
                    }
                })
                if (this.stats.time !== 0) {
                    this.stats.time = (Date.now() - this.stats.time) / 1000
                }

                this.stats.gameOver = true
            } else {
                correctGuess = 'No'
                this.character.isHidden = true
            }

            this.game.gameLog.push({
                question: {
                    text: 'Is it ' + this.character.name + '?',
                    type: 'character',
                }, answer: correctGuess,
            })

            this.closeRedundantQuestionsBasedOnRemainingTags()
        },

        closeRedundantQuestionsBasedOnRemainingTags() {
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
        },
    },
}
</script>

<style>
.characterCard {
    width: 12vw;
    height: 100%;
    min-height: 100px;

    background-color: rgb(15, 15, 15);

    text-align: center;
    line-break: normal;

    perspective: 1000px;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transition-timing-function: cubic-bezier(1, 1.03, .54, 1.4);

    cursor: pointer;
}

.characterCard h3 {
    position: relative;
    bottom: 50px;
    overflow: hidden;

    font-weight: 700;
}

.characterCard img {
    position: relative;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.imgWrapper {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
}

.backsideAnimation {
    transform: rotateX(180deg);
}

.backsideAnimation img,
.backsideAnimation h3,
.backsideAnimation div {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.3s, opacity 0.8s linear;
}

@media screen and (max-width: 768px) {
    .characterCard {
        width: 24vw;
    }
}
</style>
