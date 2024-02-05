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
                    <input type="radio" value="League of Legends" v-model="picked" v-on:click="selectLeaguePack()"
                        id="LoL" />
                    <label for="LoL">League of Legends</label>
                    <input type="radio" value="Overwatch" v-model="picked" v-on:click="selectOverwatchPack()" id="ow" />
                    <label for="ow">Overwatch</label>
                    <input type="radio" value="Jujutsu Kaisen" v-model="picked" v-on:click="selectJJKPack()" id="jjk" />
                    <label for="jjk">Jujutsu Kaisen</label>
                    <input type="radio" value="TE4" v-model="picked" v-on:click="selectTE4Pack()" id="TE4" />
                    <label for="TE4">TE4</label>
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
import { getCharactersJJK } from '../characters/GetJJKCharacters.js';
import { getQuestionsJJK } from '../questions/GetJJKQuestions.js';
import { getCharactersTE4 } from '../characters/GetTE4Characters.js';
import { getQuestionsTE4 } from '../questions/GetTE4Questions.js';

export default {
    methods: {
        async startGame() {
            this.stats.gameStarted = true
            if (this.game.themePack[0] === 'league') {
                this.game.characters = await getCharactersLeague()
                this.game.questions = await getQuestionsLeague()
            } else if (this.game.themePack[0] === 'overwatch') {
                this.game.characters = await getCharactersOverwatch()
                this.game.questions = await getQuestionsOverwatch()
            } else if (this.game.themePack[0] === 'jjk') {
                this.game.characters = await getCharactersJJK()
                this.game.questions = await getQuestionsJJK()
            } else if (this.game.themePack[0] === 'te4') {
                this.game.characters = await getCharactersTE4()
                this.game.questions = await getQuestionsTE4()
            }

            this.game.correctAnswer = this.game.characters[Math.floor(Math.random() * this.game.characters.length)];
        },

        selectLeaguePack() {
            this.game.themePack[0] = 'league'
        },
        selectOverwatchPack() {
            this.game.themePack[0] = 'overwatch'
        },
        selectJJKPack() {
            this.game.themePack[0] = 'jjk'
        },
        selectTE4Pack() {
            this.game.themePack[0] = 'te4'
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
    font-size: x-large;
}

.packSelectionButtons input {
    width: 21px;
    height: 21px;
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
