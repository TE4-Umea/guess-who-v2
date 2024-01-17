<script setup>
defineProps(['character'])
</script>

<template>
    <div v-on:click="character.isHidden == true" v-if="!character.isHidden" class="characterCard">
        <div class="imgWrapper">
            <img :src="character.image">
        </div>
        <p>{{ character.name }}</p>
    </div>
    <div v-else class="characterCard">
    </div>
</template>

<script>

</script>
