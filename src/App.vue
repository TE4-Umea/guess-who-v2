<script setup>
import CharacterCard from './components/CharacterCard.vue'
import QuestionButton from './components/QuestionButton.vue'
import WinScreen from './components/WinScreen.vue'
import StartScreen from './components/StartScreen.vue'
</script>

<template>
    <StartScreen v-if="!stats.gameStarted" :stats=stats :themePack=themePack>
    </StartScreen>

    <WinScreen v-if="stats.gameOver" :stats=stats :characters=characters :correctAnswer=correctAnswer :questions=questions
        :gameLog=gameLog>
    </WinScreen>

    <div>
        <div id="characterGrid">
            <div v-if="stats.gameStarted">
                <p class="center"></p>
                <div class="grid">
                    <CharacterCard v-for="character in characters" :key=character.id :character=character
                    :correctAnswer=correctAnswer :characters=characters :gameLog=gameLog :stats=stats />
                </div>
            </div>
        </div>

        <section id="searchField">
            <div>
                <h2 v-if="gameLog.length > 0" class="lastQuestion">
                    {{ gameLog[gameLog.length - 1].question.text }} {{ gameLog[gameLog.length - 1].answer }}
                </h2>
                <input type="text" id="myInput" @input="() => { search() }" placeholder="Search for questions.."
                    :onFocus="() => { showQuestions() }" />
            </div>
            <div>
                <div id="questionField">
                    <ul id="myUL" tabindex="-1">
                        <QuestionButton v-for="(question, index) in  questions " :key="index" :question=question
                            :characters=characters :correctAnswer=correctAnswer :gameLog=gameLog :stats=stats
                            :questions=questions />
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { getCharactersFromDatabase } from './characters/GetLeagueCharacters.js';
import { getQuestionsFromDatabase } from './questions/GetLeagueQuestions.js';

export default {
    data() {
        return {
            characters: [],
            questions: [],
            correctAnswer: {},
            gameLog: [],
            themePack: ['None'],
            stats: {
                guesses: 0,
                questionsAsked: 0,
                time: 0,
                gameOver: false,
                gameStarted: false,
            },
        };
    },
    methods: {
        search() {
            const input = document.getElementById('myInput').value;
            this.questions.forEach(question => {
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
            this.questions.forEach(question => {
                if (!this.$el.contains(event.target)) {
                    question.isHidden = true;
                }
            });
        },
        showQuestions() {
            document.getElementById('myUL').style.display = 'block'
        },
        hideQuestions() {
            document.getElementById('myUL').style.display = 'none'
        },
    },
    async mounted() {
        // Get characters and questions from database, must be in mounted() for async/await to work
        this.characters = await getCharactersFromDatabase();
        this.questions = await getQuestionsFromDatabase();

        // Set a random character to be the correct answer
        this.correctAnswer = this.characters[Math.floor(Math.random() * this.characters.length)];
        console.log(this.correctAnswer)
        document.getElementById('characterGrid').addEventListener('click', this.closeQuestionsOnClick);
        document.getElementById('searchField').addEventListener('click', this.search);
        document.getElementById('questionField').addEventListener('click', this.closeQuestionsOnClick);
        document.getElementById('questionField').addEventListener('click', this.clearSearchField);
    },
};
</script>
