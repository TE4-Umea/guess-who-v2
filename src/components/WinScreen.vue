<script setup>
defineProps(['correctAnswer', 'questions', 'stats', 'characters', 'gameLog'])
</script>

<template>
    <div class="center">
        <div :class="[{ enterAnimation: stats.gameOver }]" class="winScreen">
            <div>
                <h1>You win!</h1>
                <img :src="correctAnswer.image" alt="">
                <h1>{{ correctAnswer.name }}</h1>
                <p>You guessed {{ stats.guesses }} times. You asked {{ stats.questionsAsked }} questions. It took {{
                    stats.time }}
                    seconds.</p>
                <button v-on:click="() => { restart() }">Restart</button>
                <button>Main menu</button>
                <button v-on:click="() => { toggleGameLog() }">Game log</button>
                <button v-on:click="() => { replay() }">Watch replay</button>
            </div>
            <div class="questions" id="gameLog">
                <h2>Questions asked:</h2>
                <ul>
                    <li v-for="(turn, index) in gameLog" :key="index">
                        <p>{{ index + 1 }}. {{ turn.question.text }}: {{ turn.answer }}</p>
                    </li>
                </ul>
                <!-- <p v-for="(turn, index) in gameLog" :key="index">
                    {{ index + 1 }}. {{ turn.question.text }}: {{ turn.answer }}
                </p> -->
            </div>
        </div>
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
        toggleGameLog() {
            if (document.getElementById('gameLog').style.display === 'block') {
                document.getElementById('gameLog').style.display = 'none'
            } else {
                document.getElementById('gameLog').style.display = 'block'
            }
        },
        replay() {
            this.stats.gameOver = false
            this.stats.replay = true
            const delay = 800

            this.characters.forEach(character => {
                character.isHidden = false;
            });

            this.gameLog.forEach((turn, index) => {
                setTimeout(() => {
                    document.getElementById('lastQuestion').innerHTML = (index + 1) + '. ' + turn.question.text + ' ' + turn.answer
                    if (turn.question.type === 'character') {
                        if (turn.answer === 'Yes') {
                            this.characters.forEach(character => {
                                if (character.name !== this.correctAnswer.name) {
                                    character.isHidden = true;
                                }
                            });
                        } else {
                            this.characters.forEach(character => {
                                if (turn.question.text.includes(character.name)) {
                                    character.isHidden = true;
                                }
                            });
                        }
                    } else if (turn.question.type !== 'character') {
                        if (turn.answer === 'Yes') {
                            // Close all without tag
                            this.characters.forEach(character => {
                                let hasTag = false
                                for (let i = 0; i < character.tags.length; i++) {
                                    if (character.tags[i] === turn.question.tag) {
                                        hasTag = true
                                    }
                                }

                                if (!hasTag) {
                                    character.isHidden = true
                                }
                            })
                        } else {
                            // Close all with tag
                            this.characters.forEach(character => {
                                for (let i = 0; i < character.tags.length; i++) {
                                    if (character.tags[i] === turn.question.tag) {
                                        character.isHidden = true
                                    }
                                }
                            })
                        }
                    }
                }, delay * (index + 1));
            });

            setTimeout(() => {
                this.stats.gameOver = true
                this.stats.replay = false
            }, delay * (this.gameLog.length + 1));
        },
    },
}
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

    display: flex;
    justify-content: space-evenly;
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
    margin: 0.5rem;
    cursor: pointer;
    background-color: black;
}

.winScreen button:hover {
    background-color: rgb(64, 64, 64);
}

.enterAnimation {
    animation: winScreenEnter 2s;
}

@keyframes winScreenEnter {
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

    .winScreen {
        flex-direction: column;
        max-height: 85vh;
    }
}

.questions {
    display: none;
    overflow-y: scroll;
    max-height: 750px;
}

.questions p {
    margin: 0;
}

.questions ul {
    list-style-type: none;
    padding: 0;
}
</style>
