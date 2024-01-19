<script setup>
defineProps(['character'])
</script>

<template>
    <div :class="[{ backsideAnimation: character.isHidden }]" v-on:click="character.isHidden = !character.isHidden"
        class="characterCard"> <!-- Get class 'backsideAnimation' if isHidden is true -->
        <img :src="character.image">
        <p>{{ character.name }}</p>
    </div>
</template>

<script>

</script>

<style>
.characterCard {
    width: 12vw;
    height: 100%;
    min-height: 100px;

    border: 4px solid red;

    text-align: center;
    line-break: normal;

    perspective: 1000px;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transition-timing-function: cubic-bezier(1, 1.03, .54, 1.4);
}

.backsideAnimation {
    transform: rotateX(180deg);
}

.backsideAnimation img,
.backsideAnimation p {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.3s, opacity 0.8s linear;
}

.characterCard img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.characterCard p {
    position: relative;
    bottom: 50px;
}

@media screen and (max-width: 768px) {
    .characterCard {
        width: 24vw;
    }
}
</style>
