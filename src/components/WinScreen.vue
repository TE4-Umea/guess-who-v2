<script setup>
defineProps(['correctAnswer', 'questions', 'stats', 'characters', 'gameLog'])
</script>

<template>
    <div class="winScreen">
        <h1>You win!</h1>
        <img :src="correctAnswer.image">
        <h1>{{ correctAnswer.name }}</h1>
        <p>You guessed {{ stats.guesses }} times. You asked {{ stats.questionsAsked }} questions. It took {{ stats.time }}
            seconds.</p>
        <button v-on:click="() => { restart() }">Restart</button>
    </div>
</template>

<script>
export default {
    methods: {
        restart() {
            // This.questions.forEach(question => {
            //     question.isAnswered = false
            // })
            // this.stats = {
            //     guesses: 0,
            //     questionsAsked: 0,
            //     time: 0,
            //     gameOver: false,
            // }
            // this.gameLog = []
            // this.correctAnswer = this.characters[Math.floor(Math.random() * this.characters.length)];
            // console.log(this.correctAnswer)
            // this.characters.forEach(character => {
            //     character.isHidden = false
            // })
            location.reload()
        },
    },
}
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
