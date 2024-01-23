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
            text: 'Does the character have blonde hair?', // (white)
            tag: 'whiteHair', // If correct, close all hairColor questions, else close this one
            type: 'hairColor',
        },
        {
            text: 'Does the character have brown hair?',
            tag: 'brownHair',
            type: 'hairColor',
        },
        {
            text: 'Does the character have black hair?',
            tag: 'blackHair',
            type: 'hairColor',
        },
        {
            text: 'Does the character have grey hair?',
            tag: 'greyHair',
            type: 'hairColor',
        },
        // {
        //     text: 'Is the character bald?',
        //     tag: 'bald',
        //     type: 'hairLength',
        // },
        {
            text: 'Does the character have long hair?',
            tag: 'longHair',
            type: 'hairLength',
        },
        {
            text: 'Does the character have short hair?',
            tag: 'shortHair',
            type: 'hairLength',
        },
        {
            text: 'Does the character have a beard?',
            tag: 'beard',
            type: 'beard',
        },
        {
            text: 'Does the character have a mustache?',
            tag: 'mustache',
            type: 'mustache',
        },
        {
            text: 'Does the character have headgear?', // (hat)
            tag: 'hat',
            type: 'headgear',
        },
        // {
        //     text: 'Does the character have glasses?',
        //     tag: 'glasses',
        // },
        {
            text: 'Does the character have blue eyes?',
            tag: 'blueEyes',
            type: 'eyeColor',
        },
        {
            text: 'Does the character have brown eyes?',
            tag: 'brownEyes',
            type: 'eyeColor',
        },
        {
            text: 'Does the character have green eyes?',
            tag: 'greenEyes',
            type: 'eyeColor',
        },
        // {
        //     text: 'Does the character have white skin?',
        //     tag: 'whiteSkin',
        // },
        // {
        //     text: 'Does the character have brown skin?',
        //     tag: 'brownSkin',
        // },
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
