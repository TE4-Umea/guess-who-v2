export async function getQuestionsFromDatabase() {
    const questions = [
        {
            text: 'Is the character male?',
            tag: 'M',
        },
        {
            text: 'Is the character female?',
            tag: 'F',
        },
        {
            text: 'Does the character have blonde hair?', // (white)
            tag: 'whiteHair', // If correct, close all hairColor questions, else close this one
        },
        {
            text: 'Does the character have brown hair?',
            tag: 'brownHair',
        },
        {
            text: 'Does the character have black hair?',
            tag: 'blackHair',
        },
        {
            text: 'Does the character have grey hair?',
            tag: 'greyHair',
        },
        // {
        //     text: 'Is the character bald?',
        //     tag: 'bald',
        // },
        {
            text: 'Does the character have long hair?',
            tag: 'longHair',
        },
        {
            text: 'Does the character have short hair?',
            tag: 'shortHair',
        },
        {
            text: 'Does the character have a beard?',
            tag: 'beard',
        },
        // {
        //     text: 'Does the character have a mustache?',
        //     tag: 'mustache',
        // },
        {
            text: 'Does the character have headgear?', // (hat)
            tag: 'hat',
        },
        // {
        //     text: 'Does the character have glasses?',
        //     tag: 'glasses',
        // },
        // {
        //     text: 'Does the character have blue eyes?',
        //     tag: 'blueEyes',
        // },
        // {
        //     text: 'Does the character have brown eyes?',
        //     tag: 'brownEyes',
        // },
        // {
        //     text: 'Does the character have green eyes?',
        //     tag: 'greenEyes',
        // },
        // {
        //     text: 'Does the character have black eyes?',
        //     tag: 'blackEyes',
        // },
        // {
        //     text: 'Does the character have white skin?',
        //     tag: 'whiteSkin',
        // },
        // {
        //     text: 'Does the character have brown skin?',
        //     tag: 'brownSkin',
        // },
    ];

    // Add isAnswered property to all questions
    questions.forEach(question => {
        question.isAnswered = false;
    });
    questions.forEach(question => {
        question.isHidden = true;
    });

    return questions;
}
