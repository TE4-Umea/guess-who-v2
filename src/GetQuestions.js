export async function getQuestionsFromDatabase() {
    const questions = [
        {
            text: 'Do they have swag?',
            type: 'swag',
        },
        {
            text: 'Is the character male?',
            type: 'gender',
        },
        {
            text: 'Is the character female?',
            type: 'gender',
        },
        {
            text: 'Does the character have white hair?',
            type: 'hairColor', // If correct, close all hairColor questions, else close this one
        },
        {
            text: 'Does the character have brown hair?',
            type: 'hairColor',
        },
        // {
        //     text: 'Does the character have black hair?',
        //     type: 'hairColor',
        // },
        {
            text: 'Does the character have grey hair?',
            type: 'hairColor',
        },
        {
            text: 'Is the character bald?',
            type: 'hair',
        },
        {
            text: 'Does the character have long hair?',
            type: 'hair',
        },
        {
            text: 'Does the character have short hair?',
            type: 'hair',
        },
        {
            text: 'Does the character have a beard?',
            type: 'facialHair',
        },
        {
            text: 'Does the character have a mustache?',
            type: 'facialHair',
        },
        {
            text: 'Does the character have a hat?',
            type: 'hat',
        },
        // {
        //     text: 'Does the character have glasses?',
        //     type: 'glasses',
        // },
        // {
        //     text: 'Does the character have blue eyes?',
        //     type: 'eyes',
        // },
        // {
        //     text: 'Does the character have brown eyes?',
        //     type: 'eyes',
        // },
        // {
        //     text: 'Does the character have green eyes?',
        //     type: 'eyes',
        // },
        // {
        //     text: 'Does the character have black eyes?',
        //     type: 'eyes',
        // },
        // {
        //     text: 'Does the character have white skin?',
        //     type: 'skinColor',
        // },
        // {
        //     text: 'Does the character have brown skin?',
        //     type: 'skinColor',
        // },
    ];

    // Add isAnswered property to all questions
    questions.forEach(question => {
        question.isAnswered = false;
    });

    return questions;
}
