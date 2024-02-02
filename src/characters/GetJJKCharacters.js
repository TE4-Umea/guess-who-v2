export async function getCharactersJJK() {
    const charactersTemp = [
        {
            id: 1,
            name: 'Yuji Itadori',
            image: 'jjk/Yuji.webp',
            tags: ['M', 'human', 'pinkHair', 'brownEyes', 'sorcerer', 'RCT', 'alive', 'black-flash'],
        },
        {
            id: 2,
            name: 'Megumi Fushiguro',
            image: 'jjk/Megumi.webp',
            tags: ['M', 'human', 'darkHair', 'blueEyes', 'CT', 'sorcerer', 'unknown', 'domain', 'weapon', 'grade2'],
        },
        {
            id: 3,
            name: 'Nobara Kugisaki',
            image: 'jjk/Nobara.webp',
            tags: ['F', 'human', 'brownHair', 'brownEyes', 'CT', 'sorcerer', 'dead', 'black-flash', 'weapon', 'grade3'],
        },
        {
            id: 4,
            name: 'Satoru Gojo',
            image: 'jjk/Gojo.webp',
            tags: ['M', 'human', 'whiteHair', 'blueEyes', 'CT', 'sorcerer', 'RCT', 'domain', 'simple', 'dead', 'black-flash', 'specialgrade'],
        },
        {
            id: 5,
            name: 'Yuta Okkotsu',
            image: 'jjk/Yuta.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'sorcerer', 'RCT', 'domain', 'simple', 'alive', 'black-flash', 'weapon', 'specialgrade'],
        },
        {
            id: 6,
            name: 'Maki Zenin',
            image: 'jjk/Maki.webp',
            tags: ['F', 'human', 'darkHair', 'blueEyes', 'sorcerer', 'alive', 'weapon', 'grade4'],
        },
        {
            id: 7,
            name: 'Toge Inumaki',
            image: 'jjk/Toge.webp',
            tags: ['M', 'human', 'whiteHair', 'darkEyes', 'CT', 'sorcerer', 'alive', 'semigrade1'],
        },
        {
            id: 8,
            name: 'Panda',
            image: 'jjk/Panda.webp',
            tags: ['M', 'cursedcorpse', 'darkHair', 'whiteHair', 'brownEyes', 'CT', 'sorcerer', 'alive', 'weapon', 'semigrade2'],
        },
        {
            id: 9,
            name: 'Kinji Hakari',
            image: 'jjk/Hakari.webp',
            tags: ['M', 'human', 'pinkHair', 'darkEyes', 'CT', 'sorcerer', 'alive', 'RCT', 'domain'],
        },
        {
            id: 10,
            name: 'Ryomen Sukuna',
            image: 'jjk/Sukuna.webp',
            tags: ['M', 'curse', 'pinkHair', 'redEyes', 'CT', 'RCT', 'alive', 'domain', 'specialgrade', 'simple'],
        },
        {
            id: 11,
            name: 'Aoi Todo',
            image: 'jjk/Todo.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'sorcerer', 'simple', 'alive', 'black-flash', 'grade1'],
        },
        {
            id: 12,
            name: 'Kento Nanami',
            image: 'jjk/Nanami.webp',
            tags: ['M', 'human', 'blondeHair', 'blueEyes', 'CT', 'sorcerer', 'dead', 'black-flash', 'weapon', 'grade1'],
        },
        {
            id: 13,
            name: 'Mahito',
            image: 'jjk/Mahito.webp',
            tags: ['M', 'curse', 'blueHair', 'blueEyes', 'brownEyes', 'CT', 'domain', 'dead', 'black-flash'],
        },
        {
            id: 14,
            name: 'Kirara Hoshi',
            image: 'jjk/Kirara.webp',
            tags: ['human', 'darkHair', 'pinkHair', 'pinkEyes', 'CT', 'alive'],
        },
    ];

    charactersTemp.forEach(character => {
        character.isHidden = false;
    });

    return charactersTemp;
}
