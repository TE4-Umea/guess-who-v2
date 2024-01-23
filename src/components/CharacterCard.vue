<script setup>
defineProps(['character', 'correctAnswer', 'stats', 'characters', 'gameLog'])
</script>

<template>
    <div :id="[character.id]" :class="[{ backsideAnimation: character.isHidden }]"
        v-on:click="Guess(character, correctAnswer,)" class="characterCard">
        <!-- Get class 'backsideAnimation' if isHidden is true -->
        <div class="imgWrapper">
            <img :src="character.image">
        </div>
        <p>{{ character.name }}</p>
    </div>
</template>

<script>
export default {
    methods: {
        Guess(character, answer) {
            if (!this.stats.gameOver) {
                this.stats.guesses++
                if (character.name === answer.name) {
                    this.characters.forEach(character => {
                        if (character.name !== answer.name) {
                            character.isHidden = true
                        }
                    })
                    character.name = this.stats
                    if (this.stats.time !== 0) {
                        this.stats.time = (Date.now() - this.stats.time) / 1000
                    }

                    const element = document.getElementById(character.id)
                    element.classList.add('correct')

                    this.stats.gameOver = true
                } else {
                    character.isHidden = true
                    alert('🤬 R(dataAAAAAdataAAH 👎')
                }
            }
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
}

.characterCard p {
    position: relative;
    bottom: 50px;
    overflow: hidden;

    font-weight: 700;
    font-size: var(--step-0);
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
.backsideAnimation p,
.backsideAnimation div {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.3s, opacity 0.8s linear;
}

.correct p {
    bottom: 90%;
}

.correct .imgWrapper {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 100%, rgba(0, 0, 0, 0.65) 100%);
}

@media screen and (max-width: 768px) {
    .characterCard {
        width: 24vw;
    }
}
</style>
