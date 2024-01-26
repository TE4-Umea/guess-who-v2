<script setup>
import CharacterCard from './components/CharacterCard.vue'
import QuestionButton from './components/QuestionButton.vue'
import WinScreen from './components/WinScreen.vue'
</script>

<template>
    <WinScreen v-if="stats.gameOver" :stats=stats :characters=characters :correctAnswer=correctAnswer :questions=questions
        :gameLog=gameLog>
    </WinScreen>

    <div id="characterGrid">
        <div class="grid">
            <CharacterCard v-for="character in characters" :key=character.id :character=character
                :correctAnswer=correctAnswer :characters=characters :gameLog=gameLog :stats=stats :questions=questions />
        </div>
    </div>

    <div id="searchField">
        <h2 v-if="gameLog.length > 0" class="lastQuestion" id="lastQuestion">
            {{ gameLog.length }}. {{ gameLog[gameLog.length - 1].question.text }}
            {{ gameLog[gameLog.length - 1].answer }}
        </h2>
        <input type="text" id="myInput" @input="() => { search() }" placeholder="Search for questions.."
            :onFocus="() => { showQuestions() }" />

        <div id="questionField">
            <ul id="myUL" tabindex="-1">
                <QuestionButton v-for="(question, index) in  questions " :key="index" :question=question
                    :characters=characters :correctAnswer=correctAnswer :gameLog=gameLog :stats=stats
                    :questions=questions />
            </ul>
        </div>
    </div>
</template>

<script>
import { getCharactersFromDatabase } from './characters/GetLotrCharacters.js';
import { getQuestionsFromDatabase } from './questions/GetLotrQuestions.js';

export default {
    data() {
        return {
            characters: [],
            questions: [],
            correctAnswer: {},
            gameLog: [],
            stats: {
                guesses: 0,
                questionsAsked: 0,
                time: 0,
                gameOver: false,
                replay: false,
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
