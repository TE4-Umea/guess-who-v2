<script setup>
import CharacterCard from './components/CharacterCard.vue'
</script>

<template>
    <div class="grid">
        <CharacterCard v-for="(character, index) in characters" :key="index" :character=character />
    </div>
</template>

<script>
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
                { text: 'har han swag?', command: 'characters.map(character => { if (!character.swag) { character.isHidden = true } })' },
                { text: 'innehåller hans namn L?', command: 'characters.map(character => { character.isHidden = !character.isHidden })' },
            ],
        };
    },
};
</script>
