export async function getQuestionsOverwatch() {
    const questions = [
        {
            text: 'Is the character male?',
            tag: 'M',
            type: 'gender',
        },
        {
            text: 'Is the character female?',
            tag: 'F',
            type: 'gender',
        },
        {
            text: 'Is the character a human?',
            tag: 'human',
            type: ['appearance', 'race'],
        },
        {
            text: 'Is the character an omnic?',
            tag: 'omnic',
            type: ['appearance', 'race'],
        },
        {
            text: 'Is the character an animal?',
            tag: 'animal',
            type: ['appearance', 'race'],
        },
        {
            text: 'Does the character have white hair?',
            tag: 'whiteHair',
            type: ['appearance', 'hairColor'],
        },
        {
            text: 'Does the character have brown hair?',
            tag: 'brownHair',
            type: ['appearance', 'hairColor'],
        },
        {
            text: 'Does the character have dark hair?',
            tag: 'darkHair',
            type: ['appearance', 'hairColor'],
        },
        {
            text: 'Is the character bald?',
            tag: 'bald',
            type: ['appearance', 'hairColor'],
        },
        {
            text: 'Does the character have glasses/goggles?',
            tag: 'glasses',
            type: ['appearance', 'glasses'],
        },
        {
            text: 'Does the character have a mask',
            tag: 'mask',
            type: ['appearance', 'mask'],
        },
        {
            text: 'Does the character have facial hair',
            tag: 'facialHair',
            type: ['appearance', 'facialHair'],
        },
        {
            text: 'Does the character have brown eyes',
            tag: 'brownEyes',
            type: ['appearance', 'eyeColor'],
        },
        {
            text: 'Does the character have red eyes',
            tag: 'redEyes',
            type: ['appearance', 'eyeColor'],
        },
        {
            text: 'Does the character have blue eyes',
            tag: 'blueEyes',
            type: ['appearance', 'eyeColor'],
        },
        {
            text: 'Does the character have yellow eyes',
            tag: 'yellowEyes',
            type: ['appearance', 'eyeColor'],
        },
        {
            text: 'Does the character have shield health?',
            tag: 'shields',
            type: ['mechanic'],
        },
        {
            text: 'Does the character have armor?',
            tag: 'armor',
            type: ['mechanic'],
        },
        {
            text: 'Is it a dive character?',
            tag: 'dive',
            type: ['comp'],
        },
        {
            text: 'Is it a poke character?',
            tag: 'poke',
            type: ['comp'],
        },
        {
            text: 'Is it a brawl character?',
            tag: 'brawl',
            type: ['comp'],
        },
        {
            text: 'Is the character a tank?',
            tag: 'tank',
            type: ['role'],
        },
        {
            text: 'Is the character a DPS?',
            tag: 'DPS',
            type: ['role'],
        },
        {
            text: 'Is the character a support?',
            tag: 'support',
            type: ['role'],
        },
        {
            text: 'Does the character have a shield?',
            tag: 'shield',
            type: ['shield'],
        },
        {
            text: 'Is the characters primary fire projectile?',
            tag: 'projectile',
            type: 'shoot',
        },
        {
            text: 'Is the characters primary fire hitscan?',
            tag: 'hitscan',
            type: 'shoot',
        },
        {
            text: 'Is the characters primary fire beam?',
            tag: 'beam',
            type: 'shoot',
        },
    ];

    questions.forEach(question => {
        question.isAnswered = false;
    });
    questions.forEach(question => {
        question.isHidden = false;
    });
    return questions;
}
