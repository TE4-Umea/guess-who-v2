<script setup>
defineProps(['name', 'image', 'guesses', 'questions', 'time', 'gameOver'])
</script>

<template>
    <div class="center">
        <div :class="[{ enterAnimation: gameOver }]" class="winScreen">
            <h1>You win!</h1>
            <img :src="image">
            <h1>{{ name }}</h1>
            <p>You guessed {{ guesses }} times. You asked {{ questions }} questions. It took {{ time }} seconds.</p>
            <button>Restart</button>
            <button>Game log</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.center {
    display: flex;
    justify-content: center;
}

.winScreen {
    width: 80vw;
    padding: 1rem;
    margin-top: 1rem;

    background-color: rgb(24, 24, 24);

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

.enterAnimation {
    animation: enter 2s;
}

@keyframes enter {
    0% {
        top: -50rem;
    }

    100% {
        top: 0;
    }
}

@media screen and (max-width: 768px) {
    .winScreen img {
        width: 48vw;
        height: 48vw;
    }
}
</style>
