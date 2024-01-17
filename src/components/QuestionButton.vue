<script setup>
defineProps(['question', 'characters', 'index'])
</script>

<template>
    <li>
        <a v-on:click="() => { askQuestion(index, characters) }">
            <p>{{ question.text }}</p>
        </a>
    </li>
</template>

<script>
export default {
    methods: {
        askQuestion(index, characters) {
            console.log(index)
            if (index === 0) {
                characters.forEach(character => {
                    if (!character.swag) {
                        character.isHidden = true
                    }
                })
            } else {
                characters.forEach(character => {
                    character.isHidden = !character.isHidden
                })
            }
        },
    },
}
</script>
