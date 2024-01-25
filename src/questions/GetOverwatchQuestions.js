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
            text: 'Is the character a human?',
            tag: 'human',
            type: 'race',
        },
        {
            text: 'Is the character an omnic?',
            tag: 'omnic',
            type: 'race',
        },
        {
            text: 'Does the character have shield health?',
            tag: 'shields',
            type: 'health',
        },
        {
            text: 'Does the character have armor?',
            tag: 'armor',
            type: 'health',
        },
        {
            text: 'Is it a dive character?',
            tag: 'dive',
            type: 'comp',
        },
        {
            text: 'Is it a poke character?',
            tag: 'poke',
            type: 'comp',
        },
        {
            text: 'Is it a brawl character?',
            tag: 'brawl',
            type: 'comp',
        },
        {
            text: 'Is the character a tank?',
            tag: 'tank',
            type: 'role',
        },
        {
            text: 'Is the character a DPS?',
            tag: 'DPS',
            type: 'role',
        },
        {
            text: 'Is the character a support?',
            tag: 'support',
            type: 'role',
        },
        {
            text: 'Does the character have a shield?',
            tag: 'shield',
            type: 'shield',
        },
        // {
        //     text: 'Does the character have a boop?',
        //     tag: 'boop',
        //     type: 'abilities',
        // },
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
    // Add isAnswered and isHidden property to all questions
    questions.forEach(question => {
        question.isAnswered = false;
    });
    questions.forEach(question => {
        question.isHidden = false;
    });
    return questions;
}
