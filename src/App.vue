<script setup>
import CharacterCard from './components/CharacterCard.vue'
import QuestionButton from './components/QuestionButton.vue'
import WinScreen from './components/WinScreen.vue'
import StartScreen from './components/StartScreen.vue'
import { supabase } from './lib/supabaseClient'
</script>

<template>
    <StartScreen v-if="!stats.gameStarted" :stats=stats :game=game>
    </StartScreen>

    <WinScreen v-if="stats.gameOver" :stats=stats :game=game>
    </WinScreen>

    <div>
        <div id="characterGrid">
            <div v-if="stats.gameStarted">
                <p class="center"></p>
                <div class="grid">
                    <CharacterCard v-for="(character, index) in game.characters" :key=index :character=character :game=game
                        :stats=stats />
                </div>
            </div>
        </div>
        <p class="grid" v-if="game.themePack.gameName === 'Overwatch'">
            ®2016 Blizzard Entertainment, Inc. All rights reserved.
            Overwatch is a trademark or registered trademark of Blizzard Entertainment, Inc. in the U.S. and/or other
            countries.
        </p>
        <p class="grid" v-if="game.themePack.gameName === 'Jujutsu Kaisen'">
            JUJUTSU KAISEN © 2018 by Gege Akutami/SHUEISHA Inc. All rights reserved.
        </p>

        <section id="searchField">
            <div>
                <h2 v-if="game.gameLog.length > 0" class="lastQuestion" id="lastQuestion">
                    {{ game.gameLog.length }}. {{ game.gameLog[game.gameLog.length - 1].question.text }}
                    {{ game.gameLog[game.gameLog.length - 1].answer }}
                </h2>
                <input type="text" id="myInput" @input="() => { search() }" placeholder="Search for questions.."
                    :onFocus="() => { showQuestions(); }" />
            </div>
            <div>
                <div id="questionField">
                    <ul id="myUL" tabindex="-1">
                        <QuestionButton v-for="(question, index) in  game.questions " :key="index" :question=question
                            :stats=stats :game=game />
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            game: {
                characters: [],
                questions: [],
                correctAnswer: {},
                gameLog: [],
                themePack: {}, // Selected theme
                themes: [],
            },
            stats: {
                guesses: 0,
                questionsAsked: 0,
                time: 0,
                gameOver: false,
                gameStarted: false,
                replay: false,
            },
        };
    },
    methods: {
        search() {
            const input = document.getElementById('myInput').value;
            this.game.questions.forEach(question => {
                if (question.text.toLowerCase().includes(input.toLowerCase())) {
                    question.isHidden = false;
                } else {
                    question.isHidden = true;
                }
            });
        },

        clearSearchField() {
            document.getElementById('myInput').value = '';
        },

        closeQuestionsOnClick(event) {
            if (screen.width <= 768) {
                return;
            }

            this.game.questions.forEach(question => {
                if (!this.$el.contains(event.target)) {
                    question.isHidden = true;
                }
            });
        },
        showQuestions() {
            document.getElementById('myUL').style.display = 'block'
        },
        async getThemes() {
            const { data } = await supabase.from('Game').select()
            this.game.themes = data
            this.game.themePack = this.game.themes[0]
        },
    },
    async mounted() {
        this.getThemes()
        this.game.correctAnswer = this.game.characters[Math.floor(Math.random() * this.game.characters.length)];

        document.getElementById('characterGrid').addEventListener('click', this.closeQuestionsOnClick);
        document.getElementById('searchField').addEventListener('click', this.search);
        document.getElementById('questionField').addEventListener('click', this.closeQuestionsOnClick);
        document.getElementById('questionField').addEventListener('click', this.clearSearchField);
    },
};
</script>
