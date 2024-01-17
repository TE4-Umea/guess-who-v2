export async function getQuestionsFromDatabase() {
    const questions = [
        {
            text: 'Do they have swag?',
            command: 'characters.map(character => { if (!character.swag) { character.isHidden = true } })',
        },
        {
            text: 'Does their name contain L?',
            command: 'characters.map(character => { character.isHidden = !character.isHidden })',
        },
        {
            text: 'Is the character male?',
            command: '',
            type: 'gender',
        },
        {
            text: 'Is the character female?',
            command: '',
            type: 'gender',
        },
        {
            text: 'Does the character have white hair?',
            command: '',
            type: 'hairColor', // If correct, close all hairColor questions, else close this one
        },
        {
            text: 'Does the character have brown hair?',
            command: '',
            type: 'hairColor',
        },
    ];

    return questions;
}
