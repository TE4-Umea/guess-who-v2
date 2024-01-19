<script setup>
import CharacterCard from './components/CharacterCard.vue'
import QuestionButton from './components/QuestionButton.vue'
</script>

<template>
    <div class="grid">
        <CharacterCard v-for="(character, index) in characters" :key="index" :character=character />
    </div>

    <div id="searchField">
        <input type="text" id="myInput" @input="() => { search() }" placeholder="Search for questions.." />
        <ul id="myUL">
            <QuestionButton v-for="(question, index) in  questions " :key="index" :index="index" :question=question
                :characters=characters :correctAnswer=correctAnswer :gameLog=gameLog />
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
