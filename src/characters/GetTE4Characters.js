export async function getCharactersTE4() {
    const charactersTemp = [
        {
            id: 1,
            name: 'Albert',
            image: 'te4/Albert.jpg',
            tags: ['F', 'gingerbread', 'blueEyes', 'design', 'gym', 'metria', 'umea', 'ica', 'bike'],
        },
        {
            id: 2,
            name: 'Alexander',
            image: 'te4/Alexander.jpg',
            tags: ['M', 'darkHair', 'brownEyes', 'design', 'intinor', 'italy', 'umea', 'ica', 'bike', 'pet'],
        },
        {
            id: 3,
            name: 'Angelica',
            image: 'te4/Angelica.png',
            tags: ['F', 'darkHair', 'brownEyes', 'design', 'metria', 'umea', 'notumea', 'lego', 'bus', 'pet'],
        },
        {
            id: 4,
            name: 'Hjalmar',
            image: 'te4/Hjalmar.jpeg',
            tags: ['M', 'brownHair', 'blueEyes', 'backend', 'facialHair', 'gym', 'intinor', 'notumea', 'bus', 'pet'],
        },
        {
            id: 5,
            name: 'Leo',
            image: 'te4/Leo.png',
            tags: ['M', 'brownHair', 'brownEyes', 'glasses', 'design', 'gameDevelopment', 'facialHair', 'intinor', 'notumea', 'lego', 'bus', 'pet'],
        },
        {
            id: 6,
            name: 'Loke',
            image: 'te4/Loke.png',
            tags: ['M', 'darkHair', 'blueEyes', 'glasses', 'backend', 'gameDevelopment', 'facialHair', 'intinor', 'notumea', 'ica', 'bus', 'pet'],
        },
        {
            id: 7,
            name: 'Lukas',
            image: 'te4/Lukas1.png',
            tags: ['M', 'blondeHair', 'brownEyes', 'greyEyes', 'greenEyes', 'glasses', 'backend', 'frontend', 'gym', 'elastisys', 'umea', 'ica', 'lego', 'bus', 'pet'],
        },
        {
            id: 8,
            name: 'Rasmus',
            image: 'te4/Rasmus.jpeg',
            tags: ['M', 'brownHair', 'brownEyes', 'greenEyes', 'backend', 'gameDevelopment', 'gym', 'metria', 'italy', 'umea', 'ica', 'bike', 'bus', 'pet'],
        },
        {
            id: 9,
            name: 'Seth',
            image: 'te4/Seth1.png',
            tags: ['M', 'brownHair', 'brownEyes', 'glasses', 'gameDevelopment', 'facialHair', 'skillster', 'umea', 'lego', 'bus', 'pet'],
        },
        {
            id: 10,
            name: 'Simon',
            image: 'te4/Simon.png',
            tags: ['M', 'blondeHair', 'blueEyes', 'glasses', 'frontend', 'gameDevelopment', 'intinor', 'umea', 'lego', 'bike'],
        },
        {
            id: 11,
            name: 'Tim F',
            image: 'te4/TimF.jpeg',
            tags: ['M', 'brownHair', 'blueEyes', 'glasses', 'gameDevelopment', 'facialHair', 'gym', 'skillster', 'italy', 'notumea', 'ica', 'bus', 'pet'],
        },
        {
            id: 12,
            name: 'Tim N',
            image: 'te4/TimN1.png',
            tags: ['M', 'brownHair', 'blueEyes', 'glasses', 'frontend', 'backend', 'facialHair', 'gym', 'metria', 'notumea', 'ica', 'bike'],
        },
        {
            id: 13,
            name: 'Jens',
            image: 'te4/Jens.png',
            tags: ['M', 'brownHair', 'brownEyes', 'glasses', 'teacher', 'design', 'frontend', 'backend', 'gameDevelopment', 'facialHair', 'umea', 'bus', 'pet'],
        },
        {
            id: 14,
            name: 'Kaj',
            image: 'te4/Kaj.jpeg',
            tags: ['M', 'gingerbread', 'blueEyes', 'glasses', 'teacher', 'backend', 'facialHair', 'umea', 'bike', 'pet'],
        },
        {
            id: 15,
            name: 'Magnus',
            image: 'te4/Magnus.png',
            tags: ['M', 'darkHair', 'blueEyes', 'teacher', 'backend', 'facialHair', 'notumea', 'bike', 'pet'],
        },
    ];

    charactersTemp.forEach(character => {
        character.isHidden = false;
    });

    return charactersTemp;
}
