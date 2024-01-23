<script setup>
defineProps(['name', 'image', 'guesses', 'questions', 'time'])
</script>

<template>
    <div class="winScreen">
        <h1>You win!</h1>
        <img :src="image">
        <h1>{{ name }}</h1>
        <p>You guessed {{ guesses }} times. You asked {{ questions }} questions. It took {{ time }} seconds.</p>
        <button>Restart</button>
    </div>
</template>

<script>
export default {}
</script>

<style>
.winScreen {
    width: 80vw;
    margin: auto;
    padding: 1rem;

    background-color: rgb(15, 15, 15);

    text-align: center;

    border-radius: 10px;

    z-index: 1;
    position: fixed;
}

.winScreen img {
    width: 24vw;
    height: 24vw;

    border-radius: 10px;

    object-fit: cover;
    z-index: -1;
    position: relative;
}

.winScreen button {
    color: #646cff;
    font-weight: 700;
    border-style: none;
    border-radius: 20px;
    padding: 0.5rem 2rem 0.5rem 2rem;
}
</style>
