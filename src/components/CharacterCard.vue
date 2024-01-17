<script setup>
defineProps(['character'])
</script>

<template>
    <div v-on:click="character.isHidden = !character.isHidden" v-if="!character.isHidden" class="characterCard">
        <img :src="character.image">
        <p>{{ character.name }}</p>
    </div>
    <div v-else class="characterCard">
    </div>
</template>

<script>

</script>

<style>
.grid .characterCard {
    min-width: 20vw;
    height: 100%;

    border: 4px solid red;

    text-align: center;
    min-height: 100px;
}

.grid .characterCard img {
    width: 20vw;
    height: 20vw;
    object-fit: cover;
}

@media screen and (max-width: 768px) {
    .grid .characterCard img {
        width: 40vw;
        height: 40vw;
    }
}
</style>
