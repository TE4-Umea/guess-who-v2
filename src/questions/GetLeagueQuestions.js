export async function getQuestionsFromDatabase() {
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
            text: 'Is the character human?',
            tag: 'human', // If correct, close all species questions, else close this one
            type: 'species',
        },
        {
            text: 'Is the character a darkin?',
            tag: 'darkin',
            type: 'species',
        },
        {
            text: 'Is the character a yordle?',
            tag: 'yordle',
            type: 'species',
        },
        {
            text: 'Is the character a vastaya?',
            tag: 'vastaya',
            type: 'species',
        },
        {
            text: 'Is the character undead?',
            tag: 'undead',
            type: 'species',
        },
        {
            text: 'Is the character an iceborne?',
            tag: 'iceborne',
            type: 'species',
        },
        {
            text: 'Is the character voidborn?',
            tag: 'voidborn',
            type: 'species',
        },
        {
            text: 'Is the character a spirit?',
            tag: 'spirit',
            type: 'species',
        },
        {
            text: 'Is the character a tree?',
            tag: 'tree',
            type: 'species',
        },
        {
            text: 'Is the character a golem?',
            tag: 'golem',
            type: 'species',
        },
        {
            text: 'Is the character a demon?',
            tag: 'demon',
            type: 'species',
        },
        {
            text: 'Is the character an aspect?',
            tag: 'aspect',
            type: 'species',
        },
        {
            text: 'Is the character a god?',
            tag: 'god',
            type: 'species',
        },
        {
            text: 'Is the character a dragon?',
            tag: 'human',
            type: 'species',
        },
        {
            text: 'Is the character a rat?',
            tag: 'rat',
            type: 'species',
        },
        {
            text: 'Is the character a cat?',
            tag: 'cat',
            type: 'species',
        },
        {
            text: 'Is the character a minotaur?',
            tag: 'minotaur',
            type: 'species',
        },
        {
            text: 'Is the character a troll?',
            tag: 'troll',
            type: 'species',
        },
        {
            text: 'Is the character a celestial?',
            tag: 'celestial',
            type: 'species',
        },
        {
            text: 'Is the character an ascended?',
            tag: 'ascended',
            type: 'species',
        },
        {
            text: 'Is the character a revenant?',
            tag: 'revenant',
            type: 'species',
        },
        {
            text: 'Is the character a titan?',
            tag: 'titan',
            type: 'species',
        },
        {
            text: 'Is the character a yeti?',
            tag: 'yeti',
            type: 'species',
        },
        {
            text: 'Is the character a brackern?',
            tag: 'brackern',
            type: 'species',
        },
        {
            text: 'Is the character from Noxus?',
            tag: 'noxus',
            type: 'location',
        },
        {
            text: 'Is the character from Demacia?',
            tag: 'demacia',
            type: 'location',
        },
        {
            text: 'Is the character from Bilgewater?',
            tag: 'bilgewater',
            type: 'location',
        },
        {
            text: 'Is the character from Bandle City?',
            tag: 'bandlecity',
            type: 'location',
        },
        {
            text: 'Is the character from the Shadow Isles?',
            tag: 'shadow-isles',
            type: 'location',
        },
        {
            text: 'Is the character from Piltover?',
            tag: 'piltover',
            type: 'location',
        },
        {
            text: 'Is the character from Zaun?',
            tag: 'zaun',
            type: 'location',
        },
        {
            text: 'Is the character from Freljord?',
            tag: 'freljord',
            type: 'location',
        },
        {
            text: 'Is the character from Camavor?',
            tag: 'camavor',
            type: 'location',
        },
        {
            text: 'Is the character from Ionia?',
            tag: 'ionia',
            type: 'location',
        },
        {
            text: 'Is the character from Targon?',
            tag: 'targon',
            type: 'location',
        },
        {
            text: 'Is the character from Shurima?',
            tag: 'Shurima',
            type: 'location',
        },
        {
            text: 'Is the character from Ixtal?',
            tag: 'ixtal',
            type: 'location',
        },
        {
            text: 'Is the character from the Void?',
            tag: 'void',
            type: 'location',
        },
        {
            text: 'Is the character from Kathkan?',
            tag: 'kathkan',
            type: 'location',
        },
        {
            text: 'Is the character from Icathia?',
            tag: 'icathia',
            type: 'location',
        },
        {
            text: 'Is the character from Runeterra?',
            tag: 'runeterra',
            type: 'location',
        },
        {
            text: 'Is the character played toplane?',
            tag: 'top',
            type: 'lane',
        },
        {
            text: 'Is the character played jungle?',
            tag: 'jungle',
            type: 'lane',
        },
        {
            text: 'Is the character played midlane?',
            tag: 'mid',
            type: 'lane',
        },
        {
            text: 'Is the character played botlane?',
            tag: 'bot',
            type: 'lane',
        },
        {
            text: 'Is the character played support?',
            tag: 'support',
            type: 'lane',
        },
        {
            text: 'Is the character a bruiser?',
            tag: 'bruiser',
            type: 'role',
        },
        {
            text: 'Is the character a enchanter?',
            tag: 'enchanter',
            type: 'role',
        },
        {
            text: 'Is the character a tank?',
            tag: 'tank',
            type: 'role',
        },
        {
            text: 'Is the character a mage?',
            tag: 'mage',
            type: 'role',
        },
        {
            text: 'Is the character a fighter?',
            tag: 'fighter',
            type: 'role',
        },
        {
            text: 'Is the character a marksman?',
            tag: 'marksman',
            type: 'role',
        },
        {
            text: 'Is the character an assassin?',
            tag: 'assassin',
            type: 'role',
        },
        {
            text: 'Is the character melee?',
            tag: 'melee',
            type: 'range',
        },
        {
            text: 'Is the character ranged?',
            tag: 'ranged',
            type: 'range',
        },
        {
            text: 'Does the characer use mana?',
            tag: 'mana',
            type: 'resource',
        },
        {
            text: 'Does the characer use energy?',
            tag: 'energy',
            type: 'resource',
        },
        {
            text: 'Does the characer use fury?',
            tag: 'fury',
            type: 'resource',
        },
        {
            text: 'Does the characer use grit?',
            tag: 'grit',
            type: 'resource',
        },
        {
            text: 'Does the characer use courage?',
            tag: 'courage',
            type: 'resource',
        },
        {
            text: 'Does the characer use health?',
            tag: 'health',
            type: 'resource',
        },
        {
            text: 'Does the characer use shield?',
            tag: 'shield',
            type: 'resource',
        },
        {
            text: 'Does the characer use flow?',
            tag: 'flow',
            type: 'resource',
        },
        {
            text: 'Does the characer use rage?',
            tag: 'rage',
            type: 'resource',
        },
        {
            text: 'Does the characer use heat?',
            tag: 'heat',
            type: 'resource',
        },
        {
            text: 'Does the characer use ferocity?',
            tag: 'ferocity',
            type: 'resource',
        },
        {
            text: 'Is the character manaless?',
            tag: 'manaless',
            type: 'resource',
        },
    ];

    // Add isAnswered and isHidden property to all questions
    questions.forEach(question => {
        question.isAnswered = false;
    });
    questions.forEach(question => {
        question.isHidden = false;
    });

    return questions;
}