<script setup>
import { ref } from 'vue'
defineProps(['stats', 'game'])

const picked = ref('League of Legends')
</script>

<template>
    <div class="center">
        <div class="startScreen">
            <section class="startScreenText">
                <h1>Guess Who?</h1>
                <div class="intro">
                    <p>
                        A game where you have to guess which character the computer has chosen. You can ask the computer
                        questions to which it will answers yes or no. When you think you know which character it is, you can
                        guess by clicking on their image.
                        If you guess correctly, you win, otherwise the game continues. Try to win using as few questions and 
                        guesses as possible.
                    </p>
                </div>
                <img class="startScreenImage" src="/icon.svg" alt="">
                <div>
                    <p id="pickedText">Picked: {{ picked }}</p>
                </div>
            </section>
            <section>
                <div class="packSelectionButtons">
                    <input type="radio" value="League of Legends" v-model="picked" v-on:click="selectLeaguePack()" />
                    <label>League of Legends</label>
                    <input type="radio" value="Overwatch" v-model="picked" v-on:click="selectOverwatchPack()" />
                    <label>Overwatch</label>
                </div>
                <div class="startScreenButtons">
                    <button v-on:click="startGame()">Start</button>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { getCharactersLeague } from '../characters/GetLeagueCharacters.js';
import { getQuestionsLeague } from '../questions/GetLeagueQuestions.js';
import { getCharactersOverwatch } from '../characters/GetOverwatchCharacters.js';
import { getQuestionsOverwatch } from '../questions/GetOverwatchQuestions.js';

export default {
    methods: {
        async startGame() {
            this.stats.gameStarted = true
            if (this.game.themePack[0] === 'league') {
                this.game.characters = await getCharactersLeague()
                this.game.questions = await getQuestionsLeague()
            } else {
                this.game.characters = await getCharactersOverwatch()
                this.game.questions = await getQuestionsOverwatch()
            }

            this.game.correctAnswer = this.game.characters[Math.floor(Math.random() * this.game.characters.length)];
        },

        selectLeaguePack() {
            this.game.themePack[0] = 'league'
        },
        selectOverwatchPack() {
            this.game.themePack[0] = 'overwatch'
        },
    },
}
</script>

<style>
.startScreen {
    width: 80vw;
    min-height: 95%;
    max-height: 95%;
    padding: 1rem;

    background-color: #2b2b2b;

    text-align: center;

    border-radius: 10px;

    z-index: 1;
    position: fixed;
    flex-direction: column;

    overflow-y: scroll;
}

.startScreenText {
    font-size: large;
}

.startScreenText h1 {
    margin-bottom: 0;
}

.packSelectionButtons {
    font-size: larger;
}

.startScreenButtons button {
    color: #646cff;
    background-color: #000000;
    font-weight: 700;
    border-style: none;
    border-radius: 20px;
    padding: 0.5rem 2rem 0.5rem 2rem;
}

.startScreenImage {
    width: 25%;
    height: 25%;
}

.intro {
    display: flex;
    justify-content: center;
}

.intro p {
    width: 90ch;
}
</style>
