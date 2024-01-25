export async function getQuestionsFromDatabase() {
    const questions = [
        {
            text: 'Is the character male?',
            tag: 'M',
            type: ['gender'],
        },
        {
            text: 'Is the character female?',
            tag: 'F',
            type: ['gender'],
        },

        {
            text: 'Is the character human?',
            tag: 'human', // If correct, close all species questions, else close this one
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a darkin?',
            tag: 'darkin',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a yordle?',
            tag: 'yordle',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a vastaya?',
            tag: 'vastaya',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character undead?',
            tag: 'undead',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character voidborn?',
            tag: 'voidborn',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a spirit?',
            tag: 'spirit',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a tree?',
            tag: 'tree',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a golem?',
            tag: 'golem',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a demon?',
            tag: 'demon',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character an aspect?',
            tag: 'aspect',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a god?',
            tag: 'god',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a dragon?',
            tag: 'human',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a rat?',
            tag: 'rat',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a cat?',
            tag: 'cat',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a minotaur?',
            tag: 'minotaur',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a troll?',
            tag: 'troll',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a celestial?',
            tag: 'celestial',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character an ascended?',
            tag: 'ascended',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a revenant?',
            tag: 'revenant',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a titan?',
            tag: 'titan',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a yeti?',
            tag: 'yeti',
            type: ['species', 'race'],
        },
        {
            text: 'Is the character a brackern?',
            tag: 'brackern',
            type: ['species', 'race'],
        },

        {
            text: 'Is the character from Noxus?',
            tag: 'noxus',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Demacia?',
            tag: 'demacia',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Bilgewater?',
            tag: 'bilgewater',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Bandle City?',
            tag: 'bandlecity',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from the Shadow Isles?',
            tag: 'shadow-isles',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Piltover?',
            tag: 'piltover',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Zaun?',
            tag: 'zaun',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Freljord?',
            tag: 'freljord',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Camavor?',
            tag: 'camavor',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Ionia?',
            tag: 'ionia',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Targon?',
            tag: 'targon',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Shurima?',
            tag: 'Shurima',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Ixtal?',
            tag: 'ixtal',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from the Void?',
            tag: 'void',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Kathkan?',
            tag: 'kathkan',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Icathia?',
            tag: 'icathia',
            type: ['location', 'lore'],
        },
        {
            text: 'Is the character from Runeterra?',
            tag: 'runeterra',
            type: ['location', 'lore'],
        },

        {
            text: 'Is the character played toplane?',
            tag: 'top',
            type: ['lane', 'mecanics'],
        },
        {
            text: 'Is the character played jungle?',
            tag: 'jungle',
            type: ['lane', 'mecanics'],
        },
        {
            text: 'Is the character played midlane?',
            tag: 'mid',
            type: ['lane', 'mecanics'],
        },
        {
            text: 'Is the character played botlane?',
            tag: 'bot',
            type: ['lane', 'mecanics'],
        },
        {
            text: 'Is the character played support?',
            tag: 'support',
            type: ['role', 'mecanics'],
        },
        {
            text: 'Is the character a bruiser?',
            tag: 'bruiser',
            type: ['role', 'mecanics'],
        },
        {
            text: 'Is the character a enchanter?',
            tag: 'enchanter',
            type: ['role', 'mecanics'],
        },
        {
            text: 'Is the character a tank?',
            tag: 'tank',
            type: ['role', 'mecanics'],
        },
        {
            text: 'Is the character a mage?',
            tag: 'mage',
            type: ['role', 'mecanics'],
        },
        {
            text: 'Is the character a fighter?',
            tag: 'fighter',
            type: ['role', 'mecanics'],
        },
        {
            text: 'Is the character a marksman?',
            tag: 'marksman',
            type: ['role', 'mecanics'],
        },
        {
            text: 'Is the character an assassin?',
            tag: 'assassin',
            type: ['role', 'mecanics'],
        },
        {
            text: 'Is the character melee?',
            tag: 'melee',
            type: ['range', 'mecanics'],
        },
        {
            text: 'Is the character ranged?',
            tag: 'ranged',
            type: ['range', 'mecanics'],
        },
        {
            text: 'Does the characer use mana?',
            tag: 'mana',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use energy?',
            tag: 'energy',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use fury?',
            tag: 'fury',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use grit?',
            tag: 'grit',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use courage?',
            tag: 'courage',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use health?',
            tag: 'health',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use shield?',
            tag: 'shield',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use flow?',
            tag: 'flow',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use rage?',
            tag: 'rage',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use heat?',
            tag: 'heat',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the characer use ferocity?',
            tag: 'ferocity',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Is the character manaless?',
            tag: 'manaless',
            type: ['resource', 'mecanics'],
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
