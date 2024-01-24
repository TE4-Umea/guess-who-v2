export async function getCharactersFromDatabase() {
    // Cconst characters = await prisma.character.findMany({})
    const charactersTemp = [
        {
            id: 1,
            name: 'Gandalf the Grey',
            image: 'lotr/gandalf.webp',
            tags: ['M', 'whiteSkin', 'longHair', 'greyHair', 'blueEyes', 'mustache', 'beard', 'hat'],
        },
        {
            id: 2,
            name: 'Frodo',
            image: 'lotr/frodo.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'brownHair', 'blueEyes'],
        },
        {
            id: 3,
            name: 'Sam',
            image: 'lotr/sam.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'whiteHair', 'brownEyes'],
        },
        {
            id: 4,
            name: 'Aragorn',
            image: 'lotr/aragorn.webp',
            tags: ['M', 'whiteSkin', 'longHair', 'brownHair', 'blueEyes', 'mustache', 'beard'],
        },
        {
            id: 5,
            name: 'Galadriel',
            image: 'lotr/galadriel.webp',
            tags: ['F', 'whiteSkin', 'longHair', 'whiteHair', 'brownEyes', 'hat'],
        },
        {
            id: 6,
            name: 'Arwen',
            image: 'lotr/arwen.webp',
            tags: ['F', 'whiteSkin', 'longHair', 'brownHair', 'greenEyes'],
        },
        {
            id: 7,
            name: 'Legolas',
            image: 'lotr/legolas.webp',
            tags: ['M', 'whiteSkin', 'longHair', 'whiteHair', 'blueEyes'],
        },
        {
            id: 8,
            name: 'Gimli',
            image: 'lotr/gimli.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'brownHair', 'brownEyes', 'mustache', 'beard', 'hat'],
        },
        {
            id: 9,
            name: 'Gollum',
            image: 'lotr/gollum.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'blackHair', 'blueEyes'],
        },
        {
            id: 10,
            name: 'Boromir',
            image: 'lotr/boromir.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'brownHair', 'brownEyes', 'mustache', 'beard'],
        },
        {
            id: 11,
            name: 'Elrond',
            image: 'lotr/elrond.webp',
            tags: ['M', 'whiteSkin', 'longHair', 'brownHair', 'brownEyes', 'hat'],
        },
        {
            id: 12,
            name: 'Eowyn',
            image: 'lotr/eowyn.webp',
            tags: ['F', 'whiteSkin', 'longHair', 'whiteHair', 'greenEyes'],
        },
        {
            id: 13,
            name: 'Bilbo',
            image: 'lotr/bilbo.webp',
            tags: ['M', 'whiteSkin', 'shortHair', 'greyHair', 'brownEyes'],
        },
    ];

    charactersTemp.forEach(character => {
        character.isHidden = false;
    });

    return charactersTemp;
}
