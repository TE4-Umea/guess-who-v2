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
export default {
    methods: {
        startGame() {
            this.stats.gameStarted = true
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
    min-height: 100%;
    padding: 1rem;

    background-color: #2b2b2b;

    text-align: center;

    border-radius: 10px;

    z-index: 1;
    position: fixed;
    flex-direction: column;
}

.startScreenText {
    font-size: large;
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
</style>
