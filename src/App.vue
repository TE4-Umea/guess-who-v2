<script setup>
import CharacterCard from './components/CharacterCard.vue'
import QuestionButton from './components/QuestionButton.vue'
</script>

<template>
    <div class="grid">
        <CharacterCard v-for="(character, index) in characters" :key="index" :character=character />
    </div>

    <div id="searchField">
        <input type="text" id="myInput" onkeyup="search()" placeholder="Search for questions.." />
        <ul id="myUL">
            <QuestionButton v-for="(question, index) in  questions " :key="index" :index="index" :question=question
                :characters=characters />
        </ul>
    </div>
</template>

<script>
import { getCharactersFromDatabase } from './GetCharacters.js';
import { getQuestionsFromDatabase } from './GetQuestions.js';

export default {
    data() {
        return {
            characters: [
                // Remove contents later
                { name: 'Leo', text: 'Le', image: 'leooberg.png', swag: false, isHidden: false },
                { name: 'Loke', text: 'BOOY GOT THAT VIRUS', image: 'lokeoberg.png', swag: false, isHidden: false },
                { name: 'Hjalmar', text: 'Hj', image: 'vue.svg', swag: false, isHidden: false },
                { name: 'Alexander', text: 'Al', image: 'alex.jpg', swag: true, isHidden: false },
            ],
            questions: [
                { text: 'har han swag?' },
                { text: 'RAAAAAAAAAAAAAH' },
            ],
            correctAnswer: {},
        };
    },
    methods: {

    },
    async mounted() {
        this.characters = await getCharactersFromDatabase();
        this.questions = await getQuestionsFromDatabase();

        // Set a random character to be the correct answer
        this.correctAnswer = this.characters[Math.floor(Math.random() * this.characters.length)];
    },
};
</script>
