export async function getCharactersFromDatabase() {
    // Cconst characters = await prisma.character.findMany({})
    const charactersTemp = [
        {
            id: 1,
            name: 'Gandalf the gray',
            image: 'gandalf.webp',
            tags: ['M', 'whiteSkin', 'longHair', 'greyHair', 'blueEyes', 'mustache', 'beard', 'hat'],
        },
        {
            id: 2,
            name: 'Frodo',
            image: 'frodo.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'brownHair', 'blueEyes'],
        },
        {
            id: 3,
            name: 'Sam',
            image: 'sam.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'brownHair', 'brownEyes'],
        },
        {
            id: 4,
            name: 'Aragorn',
            image: 'aragorn.webp',
            tags: ['M', 'whiteSkin', 'longHair', 'brownHair', 'brownEyes', 'mustache', 'beard'],
        },
        {
            id: 5,
            name: 'Galadriel',
            image: 'galadriel.webp',
            tags: ['F', 'whiteSkin', 'longHair', 'whiteHair', 'blueEyes', 'hat'],
        },
        {
            id: 6,
            name: 'Arwen',
            image: 'arwen.webp',
            tags: ['F', 'whiteSkin', 'longHair', 'brownHair', 'blueEyes'],
        },
        {
            id: 7,
            name: 'Legolas',
            image: 'legolas.webp',
            tags: ['M', 'whiteSkin', 'longHair', 'brownHair', 'blueEyes'],
        },
        {
            id: 8,
            name: 'Gimli',
            image: 'gimli.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'brownHair', 'brownEyes', 'beard'],
        },
        {
            id: 9,
            name: 'Gollum',
            image: 'gollum.webp',
            tags: ['M', 'whiteSkin', 'bald', 'blueEyes'],
        },
        {
            id: 10,
            name: 'Boromir',
            image: 'boromir.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'brownHair', 'blueEyes', 'mustache'],
        },
        {
            id: 11,
            name: 'Elrond',
            image: 'elrond.webp',
            tags: ['M', 'whiteSkin', 'longHair', 'brownHair', 'blueEyes', 'hat'],
        },
        {
            id: 12,
            name: 'Eowyn',
            image: 'eowyn.webp',
            tags: ['F', 'whiteSkin', 'longHair', 'whiteHair', 'blueEyes'],
        },
        {
            id: 13,
            name: 'Bilbo (old)',
            image: 'bilbo.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'whiteHair', 'blueEyes'],
        },
    ];

    charactersTemp.forEach(character => {
        character.isHidden = false;
    });
    console.log(charactersTemp);

    return charactersTemp;
}
