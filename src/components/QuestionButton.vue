<script setup>
defineProps(['question', 'characters', 'correctAnswer', 'gameLog'])
</script>

<template>
    <li>
        <a v-on:click="() => { askQuestion(question.text, characters, correctAnswer, gameLog) }"
            v-if="!question.isAnswered && !question.isHidden">
            <p>{{ question.text }}</p>
        </a>
    </li>
</template>

<script>
export default {
    methods: {
        // eslint-disable-next-line complexity
        askQuestion(question, characters, correctAnswer) {
            if (question === 'Is the character male?') {
                if (correctAnswer.gender === 'M') {
                    this.closeNonMales(characters)
                } else {
                    this.closeMales(characters)
                }
            } else if (question === 'Is the character female?') {
                if (correctAnswer.gender === 'F') {
                    this.closeNonFemales(characters)
                } else {
                    this.closeFemales(characters)
                }
            } else if (question === 'Does the character have white hair?') {
                if (correctAnswer.hairColor === 'white') {
                    this.closeNonWhiteHair(characters)
                } else {
                    this.closeWhiteHair(characters)
                }
            } else if (question === 'Does the character have brown hair?') {
                if (correctAnswer.hairColor === 'brown') {
                    this.closeNonBrownHair(characters)
                } else {
                    this.closeBrownHair(characters)
                }
            } else if (question === 'Does the character have gray hair?') {
                if (correctAnswer.hairColor === 'gray') {
                    this.closeNonGrayHair(characters)
                } else {
                    this.closeGrayHair(characters)
                }
            } else if (question === 'Is the character bald?') {
                if (correctAnswer.hair === 'bald') {
                    this.closeNonBalds(characters)
                } else {
                    this.closeBalds(characters)
                }
            } else if (question === 'Does the character have long hair?') {
                if (correctAnswer.hair === 'long') {
                    this.closeNonLongHairs(characters)
                } else {
                    this.closeLongHairs(characters)
                }
            } else if (question === 'Does the character have short hair?') {
                if (correctAnswer.hair === 'short') {
                    this.closeNonShortHairs(characters)
                } else {
                    this.closeShortHairs(characters)
                }
            } else if (question === 'Does the character have a beard?') {
                if (correctAnswer.beard === true) {
                    this.closeNonBeards(characters)
                } else {
                    this.closeBeards(characters)
                }
            } else if (question === 'Does the character have a mustache?') {
                if (correctAnswer.mustache === true) {
                    this.closeNonMustaches(characters)
                } else {
                    this.closeMustaches(characters)
                }
            } else if (question === 'Does the character have a hat?') {
                if (correctAnswer.hat === true) {
                    this.closeNonHats(characters)
                } else {
                    this.closeHats(characters)
                }
            }

            this.gameLog.push(question);
            this.question.isAnswered = true;
        },
        closeFemales(characters) {
            characters.forEach(character => {
                if (character.gender === 'F') {
                    character.isHidden = true
                }
            })
        },
        closeBalds(characters) {
            characters.forEach(character => {
                if (character.hair === 'bald') {
                    character.isHidden = true
                }
            })
        },
        closeHats(characters) {
            characters.forEach(character => {
                if (character.hat === true) {
                    character.isHidden = true
                }
            })
        },
        closeNonHats(characters) {
            characters.forEach(character => {
                if (character.hat !== true) {
                    character.isHidden = true
                }
            })
        },
        closeMustaches(characters) {
            characters.forEach(character => {
                if (character.mustache === true) {
                    character.isHidden = true
                }
            })
        },
        closeNonMustaches(characters) {
            characters.forEach(character => {
                if (character.mustache !== true) {
                    character.isHidden = true
                }
            })
        },
        closeBeards(characters) {
            characters.forEach(character => {
                if (character.beard === true) {
                    character.isHidden = true
                }
            })
        },
        closeNonBeards(characters) {
            characters.forEach(character => {
                if (character.beard !== true) {
                    character.isHidden = true
                }
            })
        },
        closeShortHairs(characters) {
            characters.forEach(character => {
                if (character.hair === 'short') {
                    character.isHidden = true
                }
            })
        },
        closeNonShortHairs(characters) {
            characters.forEach(character => {
                if (character.hair !== 'short') {
                    character.isHidden = true
                }
            })
        },
        closeLongHairs(characters) {
            characters.forEach(character => {
                if (character.hair === 'long') {
                    character.isHidden = true
                }
            })
        },
        closeNonLongHairs(characters) {
            characters.forEach(character => {
                if (character.hair !== 'long') {
                    character.isHidden = true
                }
            })
        },
        closeWhiteHair(characters) {
            characters.forEach(character => {
                if (character.hairColor === 'white') {
                    character.isHidden = true
                }
            })
        },
        closeGrayHair(characters) {
            characters.forEach(character => {
                if (character.hairColor === 'gray') {
                    character.isHidden = true
                }
            })
        },
        closeBrownHair(characters) {
            characters.forEach(character => {
                if (character.hairColor === 'brown') {
                    character.isHidden = true
                }
            })
        },
        closeMales(characters) {
            characters.forEach(character => {
                if (character.gender === 'M') {
                    character.isHidden = true
                }
            })
        },
        closeNonBalds(characters) {
            characters.forEach(character => {
                if (character.hair !== 'bald') {
                    character.isHidden = true
                }
            })
        },
        closeNonFemales(characters) {
            characters.forEach(character => {
                if (character.gender !== 'F') {
                    character.isHidden = true
                }
            })
        },
        closeNonMales(characters) {
            characters.forEach(character => {
                if (character.gender !== 'M') {
                    character.isHidden = true
                }
            })
        },
        closeNonWhiteHair(characters) {
            characters.forEach(character => {
                if (character.hairColor !== 'white') {
                    character.isHidden = true
                }
            })
        },
        closeNonGrayHair(characters) {
            characters.forEach(character => {
                if (character.hairColor !== 'gray') {
                    character.isHidden = true
                }
            })
        },
        closeNonBrownHair(characters) {
            characters.forEach(character => {
                if (character.hairColor !== 'brown') {
                    character.isHidden = true
                }
            })
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
