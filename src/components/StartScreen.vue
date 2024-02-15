<script setup>
import { ref } from 'vue'
import { supabase } from '/src/lib/supabaseClient'
defineProps(['stats', 'game'])
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
                    <p id="pickedText">Picked: {{ game.themePack.gameName }}</p>
                </div>
            </section>
            <section>
                <div class="packSelectionButtons" v-if="game.themes.length > 0">
                    <div v-for="(theme, index) in game.themes" :key="index">
                        <input type="radio" :value="theme.gameName" v-model="game.themePack.gameName"
                            v-on:click="selectPack(theme)" :id="theme.gameName" />
                        <label :for="theme.gameName">{{ theme.gameName }}</label>
                    </div>
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
        async startGame() {
            this.stats.gameStarted = true

            const charData = await supabase
                .from('Characters')
                .select('*')
                .eq('gameId', this.game.themePack.id)
                .order('name')
            this.game.characters = charData.data

            const questionData = await supabase
                .from('Questions')
                .select('*')
                .or('gameId.eq.' + this.game.themePack.id + ',gameId.eq.0')
                .order('id')
            this.game.questions = questionData.data

            // Kinda unnecessary bc they are false by default when undefined
            this.game.characters.forEach(character => {
                character.isHidden = false
            })
            this.game.questions.forEach(question => {
                question.isHidden = false
                question.isAnswered = false
            })

            this.game.correctAnswer = this.game.characters[Math.floor(Math.random() * this.game.characters.length)];
        },

        selectPack(theme) {
            this.game.themePack = theme
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
    display: flex;
    justify-content: center;
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

@media screen and (max-width: 768px) {
    .packSelectionButtons {
        flex-direction: column;
    }
}
</style>
