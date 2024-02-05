export async function getQuestionsJJK() {
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
            text: 'Is the character a curse, death painting, or cursed corpse?',
            tag: 'curse',
            type: ['appearance', 'race'],
        },
        {
            text: 'Is the character incarnated?',
            tag: 'incarnated',
            type: ['incarnated', 'spoiler'],
        },
        {
            text: 'Was the character part of the Culling Games?',
            tag: 'cullingGames',
            type: ['cullingGames', 'spoiler'],
        },
        {
            text: 'Does the character have blue eyes?',
            tag: 'blueEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have dark eyes?',
            tag: 'darkEyes',
            type: ['eyeColor', 'appearance'],
        },
        {
            text: 'Does the character have brown eyes?',
            tag: 'brownEyes',
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
            text: 'Does the character have white or gray hair?',
            tag: 'whiteHair',
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
            text: 'Does the character have a Cursed Technique?',
            tag: 'CT',
            type: ['CT', 'powers'],
        },
        {
            text: 'Does the character have Reverse Cursed Technique?',
            tag: 'RCT',
            type: ['RCT', 'powers'],
        },
        {
            text: 'Does the character have a Domain Expansion?',
            tag: 'domain',
            type: ['domain', 'powers'],
        },
        {
            text: 'Does the character have a Anti-Domain Technique?',
            tag: 'simple',
            type: ['simple', 'powers'],
        },
        {
            text: 'Has the character Black Flashed?',
            tag: 'black-flash',
            type: ['black-flash', 'powers'],
        },
        {
            text: 'Does the character typically use a weapon?',
            tag: 'weapon',
            type: ['weapon', 'powers'],
        },
        {
            text: 'Does the character have a Heavenly Restriction?',
            tag: 'heavenlyRestriction',
            type: ['heavenlyRestriction', 'powers'],
        },
        {
            text: 'Is the character alive (MANGA SPOILERS)?',
            tag: 'alive',
            type: ['status', 'spoilers'],
        },
        {
            text: 'Is the character Special Grade?',
            tag: 'specialgrade',
            type: ['grade', 'powers'],
        },
        {
            text: 'Is the character Special Grade 1?',
            tag: 'specialgrade1',
            type: ['grade', 'powers'],
        },
        {
            text: 'Is the character Grade 1?',
            tag: 'grade1',
            type: ['grade', 'powers'],
        },
        {
            text: 'Is the character Semi Grade 1?',
            tag: 'semigrade1',
            type: ['grade', 'powers'],
        },
        {
            text: 'Is the character Grade 2?',
            tag: 'grade2',
            type: ['grade', 'powers'],
        },
        {
            text: 'Is the character Semi Grade 2?',
            tag: 'semigrade2',
            type: ['grade', 'powers'],
        },
        {
            text: 'Is the character Grade 3?',
            tag: 'grade3',
            type: ['grade', 'powers'],
        },
        {
            text: 'Is the character Grade 4?',
            tag: 'grade4',
            type: ['grade', 'powers'],
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
