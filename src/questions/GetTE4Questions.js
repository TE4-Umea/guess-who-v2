export async function getQuestionsTE4() {
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
            text: 'Does the character have dark hair?',
            tag: 'darkHair',
            type: 'hairColor',
        },
        {
            text: 'Does the character have brown hair?',
            tag: 'brownHair',
            type: 'hairColor',
        },
        {
            text: 'Does the character have blonde hair?',
            tag: 'blondeHair',
            type: 'hairColor',
        },
        {
            text: 'Does the character have red hair?',
            tag: 'gingerbread',
            type: 'hairColor',
        },
        {
            text: 'Does the character have brown eyes?',
            tag: 'brownEyes',
            type: 'eyeColor',
        },
        {
            text: 'Does the character have blue eyes?',
            tag: 'blueEyes',
            type: 'eyeColor',
        },
        {
            text: 'Does the character have green eyes?',
            tag: 'greenEyes',
            type: 'eyeColor',
        },
        {
            text: 'Does the character have glasses?',
            tag: 'glasses',
            type: 'glasses',
        },
        {
            text: 'Does the character have facial hair?',
            tag: 'facialHair',
            type: 'facialHair',
        },
        {
            text: 'Does the character do design?',
            tag: 'design',
            type: 'field',
        },
        {
            text: 'Does the character do front-end?',
            tag: 'frontend',
            type: 'field',
        },
        {
            text: 'Does the character do backend?',
            tag: 'backend',
            type: 'field',
        },
        {
            text: 'Does the character do game development?',
            tag: 'gameDevelopment',
            type: 'field',
        },
        {
            text: 'Does the character gym?',
            tag: 'gym',
            type: 'gym',
        },
        {
            text: 'Does the character have APL at Metria?',
            tag: 'metria',
            type: 'APL',
        },
        {
            text: 'Does the character have APL at Intinor?',
            tag: 'intinor',
            type: 'APL',
        },
        {
            text: 'Does the character have APL at Elastisys?',
            tag: 'elastisys',
            type: 'APL',
        },
        {
            text: 'Does the character have APL at Skillster?',
            tag: 'skillster',
            type: 'APL',
        },
        {
            text: 'Does the character have APL in Italy?',
            tag: 'italy',
            type: 'APL',
        },
        {
            text: 'Does the character live in Umeå?',
            tag: 'umea',
            type: 'umeaYN',
        },
        {
            text: 'Does the character have LEGO on their desk?',
            tag: 'lego',
            type: 'lego',
        },
        {
            text: 'Does the character have a pet?',
            tag: 'pet',
            type: 'pet',
        },
        {
            text: 'Does the character usually go to Ica Gourmet (fika)?',
            tag: 'ica',
            type: 'ica',
        },
        {
            text: 'Does the character get to the office by bike?',
            tag: 'bike',
            type: 'transport',
        },
        {
            text: 'Does the character get to the office by bus?',
            tag: 'bus',
            type: 'transport',
        },
        {
            text: 'Is the character a teacher?',
            tag: 'teacher',
            type: 'teacher',
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
