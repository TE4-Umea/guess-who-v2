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

<style>
#myUL li a {
    border: 1px solid #ddd;
    background-color: #28282b;

    margin-top: -1px;
    padding: 12px;
    padding-right: 50px;

    text-decoration: none;
    font-size: 18px;
    /*Seth was here*/

    display: block;
    size: 100%;
}

#myUL li:hover {
    background-color: #505050;
}

a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}

a:hover {
    color: #535bf2;
}
</style>
