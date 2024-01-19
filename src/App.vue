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
            <QuestionButton v-for="(question, index) in  questions " :key="index" :question=question />
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
        };
    },
    async mounted() {
        this.characters = await getCharactersFromDatabase();
        this.questions = await getQuestionsFromDatabase();
    },
    methods: {

    },
};
</script>
