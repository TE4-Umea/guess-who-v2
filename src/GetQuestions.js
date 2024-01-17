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
        },
        {
            text: 'Is the character female?',
            command: '',
        },
        {
            text: '',
            command: '',
        },
    ];

    return questions;
}
