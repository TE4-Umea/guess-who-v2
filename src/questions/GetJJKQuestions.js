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
    ];

    questions.forEach(question => {
        question.isAnswered = false;
    });
    questions.forEach(question => {
        question.isHidden = false;
    });
    return questions;
}
