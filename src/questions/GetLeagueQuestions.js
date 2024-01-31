export async function getQuestionsLeague() {
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
            type: ['species'],
        },
        // {
        //     text: 'Is the character a darkin?',
        //     tag: 'darkin',
        //     type: ['species'],
        // },
        {
            text: 'Is the character a yordle?',
            tag: 'yordle',
            type: ['species'],
        },
        {
            text: 'Is the character a vastaya?',
            tag: 'vastaya',
            type: ['species'],
        },
        {
            text: 'Is the character undead?',
            tag: 'undead',
            type: ['species'],
        },
        {
            text: 'Is the character voidborn?',
            tag: 'voidborn',
            type: ['species'],
        },
        // {
        //     text: 'Is the character a spirit?',
        //     tag: 'spirit',
        //     type: 'species',
        // },
        {
            text: 'Is the character a demon, darkin or spirit?',
            tag: 'demonDarkinSpirit', // ['demon', 'darkin', 'spirit']
            type: ['species'],
        },
        {
            text: 'Is the character a god, celestial, aspect or ascended?',
            tag: 'godCelestialAspectAscended', // ['god', 'celestial', 'aspect', 'ascended']
            type: ['species'],
        },
        // {
        //     text: 'Is the character a tree?',
        //     tag: 'tree',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a golem?',
        //     tag: 'golem',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a demon?',
        //     tag: 'demon',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character an aspect?',
        //     tag: 'aspect',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a god?',
        //     tag: 'god',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a dragon?',
        //     tag: 'dragon',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a rat?',
        //     tag: 'rat',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a cat?',
        //     tag: 'cat',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a minotaur?',
        //     tag: 'minotaur',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a troll?',
        //     tag: 'troll',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a celestial?',
        //     tag: 'celestial',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character an ascended?',
        //     tag: 'ascended',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a revenant?',
        //     tag: 'revenant',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a titan?',
        //     tag: 'titan',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a yeti?',
        //     tag: 'yeti',
        //     type: ['species'],
        // },
        // {
        //     text: 'Is the character a brackern?',
        //     tag: 'brackern',
        //     type: ['species'],
        // },
        {
            text: 'Is the character a brackern, titan, yeti, troll, minotaur, rat, cat, tree, golem or dragon?',
            tag: 'brackernTitanYetiTrollMinotaurRatCatTreeGolemDragon', // ['brackern', 'titan', 'yeti', 'troll', 'minotaur', 'rat', 'cat', 'tree', 'golem', 'dragon']
            type: ['species'],
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
        // {
        //     text: 'Is the character from Camavor?',
        //     tag: 'camavor',
        //     type: ['location', 'lore'],
        // },
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
        // {
        //     text: 'Is the character from Kathkan?',
        //     tag: 'kathkan',
        //     type: ['location', 'lore'],
        // },
        // {
        //     text: 'Is the character from Icathia?',
        //     tag: 'icathia',
        //     type: ['location', 'lore'],
        // },
        {
            text: 'Is the character from Icathia, Kathkan or Camavor?',
            tag: 'icathiaKathkanCamavor', // ['icathia', 'kathkan', 'camavor']
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
            text: 'Is the character an enchanter?',
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
            text: 'Does the character use mana?',
            tag: 'mana',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Does the character use energy?',
            tag: 'energy',
            type: ['resource', 'mecanics'],
        },
        // {
        //     text: 'Does the character use fury?',
        //     tag: 'fury',
        //     type: ['resource', 'mecanics'],
        // },
        // {
        //     text: 'Does the character use grit?',
        //     tag: 'grit',
        //     type: ['resource', 'mecanics'],
        // },
        // {
        //     text: 'Does the character use courage?',
        //     tag: 'courage',
        //     type: ['resource', 'mecanics'],
        // },
        // {
        //     text: 'Does the character use health?',
        //     tag: 'health',
        //     type: ['resource', 'mecanics'],
        // },
        // {
        //     text: 'Does the character use shield?',
        //     tag: 'shield',
        //     type: ['resource', 'mecanics'],
        // },
        // {
        //     text: 'Does the character use flow?',
        //     tag: 'flow',
        //     type: ['resource', 'mecanics'],
        // },
        // {
        //     text: 'Does the character use rage?',
        //     tag: 'rage',
        //     type: ['resource', 'mecanics'],
        // },
        // {
        //     text: 'Does the character use heat?',
        //     tag: 'heat',
        //     type: ['resource', 'mecanics'],
        // },
        // {
        //     text: 'Does the character use ferocity?',
        //     tag: 'ferocity',
        //     type: ['resource', 'mecanics'],
        // },
        {
            text: 'Does the character use an alternate resource?',
            tag: 'otherResource',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Is the character manaless?',
            tag: 'manaless',
            type: ['resource', 'mecanics'],
        },
        {
            text: 'Is the character AP?',
            tag: 'AP',
            type: 'damageType',
        },
        {
            text: 'Is the character AD?',
            tag: 'AD',
            type: 'damageType',
        },
        {
            text: 'Is the character hybrid?',
            tag: 'Hybrid',
            type: 'damageType',
        },
        {
            text: 'Is the character HP scaling?',
            tag: 'HP-scale',
            type: 'damageType',
        },
        {
            text: 'Does the character have blue eyes?',
            tag: 'blueEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have orange eyes?',
            tag: 'orangeEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have red eyes?',
            tag: 'redEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have green eyes?',
            tag: 'greenEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have dark eyes?',
            tag: 'darkEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have white eyes?',
            tag: 'whiteEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have pink eyes?',
            tag: 'pinkEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have purple eyes?',
            tag: 'purpleEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have yellow eyes?',
            tag: 'yellowEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have dark hair?',
            tag: 'darkHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have blue hair?',
            tag: 'blueHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have white hair?',
            tag: 'whiteHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have red hair?',
            tag: 'redHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have dark hair?',
            tag: 'darkHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have purple hair?',
            tag: 'purpleHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have dark hair?',
            tag: 'darkHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have blonde hair?',
            tag: 'blondeHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have brown hair?',
            tag: 'brownHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have orange hair?',
            tag: 'darkHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have green hair?',
            tag: 'greenHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Does the character have pink hair?',
            tag: 'pinkHair',
            type: ['hairColor', 'appearance'],
        },
        {
            text: 'Is the character bald?',
            tag: 'bald',
            type: ['hairLength', 'appearance'],
        },
        {
            text: 'Does the character have short hair?',
            tag: 'shortHair',
            type: ['hairLength', 'appearance'],
        },
        {
            text: 'Does the character have medium length hair?',
            tag: 'mediumHair',
            type: ['hairLength', 'appearance'],
        },
        {
            text: 'Does the character have long hair?',
            tag: 'longHair',
            type: ['hairLength', 'appearance'],
        },
        {
            text: 'Does the character have facial hair?',
            tag: 'facialHair',
            type: ['facialHair', 'appearance'],
        },
        {
            text: 'Does the character have headwear?',
            tag: 'headwear',
            type: ['headwear', 'appearance'],
        },
        {
            text: 'Does the character have glasses, a mask, or goggles?',
            tag: 'mask',
            type: ['mask', 'appearance'],
        },
        {
            text: 'Does the character have animal features?',
            tag: 'animal',
            type: ['animal', 'appearance'],
        },
        {
            text: 'Does the character have robotic features?',
            tag: 'robot',
            type: ['robot', 'appearance'],
        },
        {
            text: 'Does the character lack clothes?',
            tag: 'naked',
            type: ['naked', 'appearance'],
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
