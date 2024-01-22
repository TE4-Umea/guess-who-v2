export async function getCharactersFromDatabase() {
    // Cconst characters = await prisma.character.findMany({})
    const charactersTemp = [
        {
            id: 1,
            name: 'Gandalf the Grey',
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
            tags: ['M', 'whiteSkin', 'shortHair', 'whiteHair', 'brownEyes'],
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
            tags: ['M', 'whiteSkin', 'longHair', 'whiteHair', 'blueEyes'],
        },
        {
            id: 8,
            name: 'Gimli',
            image: 'gimli.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'brownHair', 'brownEyes', 'beard', 'hat'],
        },
        {
            id: 9,
            name: 'Gollum',
            image: 'gollum.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'blackHair', 'blueEyes'],
        },
        {
            id: 10,
            name: 'Boromir',
            image: 'boromir.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'brownHair', 'blueEyes', 'beard'],
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
            tags: ['M', 'whiteSkin', 'shortHair', 'greyHair', 'blueEyes'],
        },
    ];

    charactersTemp.forEach(character => {
        character.isHidden = false;
    });
    console.log(charactersTemp);

    return charactersTemp;
}
