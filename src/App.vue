<script setup>
import CharacterCard from './components/CharacterCard.vue'
import QuestionButton from './components/QuestionButton.vue'
</script>

<template>
    <!-- <div>
        <p v-for="(turn, index) in gameLog" :key="index">
            {{ turn.question.text }}: {{ turn.answer }}
        </p>
    </div> -->

    <div class="grid">
        <CharacterCard v-for="character in characters" :key=character.id :character=character :correctAnswer=correctAnswer
            :characters=characters :gameLog=gameLog :stats=stats />
    </div>

    <div id="searchField">
        <h2 v-if="gameLog.length > 0">
            {{ gameLog[gameLog.length - 1].question.text }} {{ gameLog[gameLog.length - 1].answer }}
        </h2>
        <input type="text" id="myInput" @input="() => { search() }" placeholder="Search for questions.."
            :onFocus="() => { showQuestions() }" />
        <ul id="myUL">
            <QuestionButton v-for="(question, index) in  questions " :key="index" :question=question :characters=characters
                :correctAnswer=correctAnswer :gameLog=gameLog :stats=stats :questions=questions />
        </ul>
    </div>
</template>

<script>
import { getCharactersFromDatabase } from './GetCharacters.js';
import { getQuestionsFromDatabase } from './GetQuestions.js';

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
    },
};
</script>
