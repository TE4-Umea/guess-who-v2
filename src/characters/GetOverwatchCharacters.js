export async function getCharactersFromDatabase() {
    // Cconst characters = await prisma.character.findMany({})
    const charactersTemp = [
        {
            id: 1,
            name: 'Reinhardt',
            image: 'overwatch/ReinhardtSquare.png',
            tags: ['M', 'human', 'armor', 'brawl', 'tank', 'shield', 'melee'],
        },
        {
            id: 2,
            name: 'Tracer',
            image: 'overwatch/TracerSquare.png',
            tags: ['F', 'human', 'health', 'dive', 'DPS', 'hitscan'],
        },
        {
            id: 3,
            name: 'Bastion',
            image: 'overwatch/BastionSquare.png',
            tags: ['M', 'omnic', 'health', 'armor', 'brawl', 'DPS', 'hitscan'],
        },
        {
            id: 4,
            name: 'Moira',
            image: 'overwatch/MoiraSquare.png',
            tags: ['F', 'human', 'health', 'brawl', 'support', 'beam'],
        },
        {
            id: 5,
            name: 'Orisa',
            image: 'overwatch/OrisaSquare.png',
            tags: ['F', 'omnic', 'health', 'armor', 'poke', 'brawl', 'tank', 'projectile'],
        },
        {
            id: 6,
            name: 'Winston',
            image: 'overwatch/WinstonSquare.png',
            tags: ['M', 'animal', 'health', 'dive', 'tank', 'shield', 'beam'],
        },
        {
            id: 7,
            name: 'Ana',
            image: 'overwatch/AnaSquare.png',
            tags: ['F', 'human', 'health', 'brawl', 'poke', 'dive', 'support', 'hitscan', 'projectile'],
        },
        {
            id: 8,
            name: 'Genji',
            image: 'overwatch/GenjiSquare.png',
            tags: ['M', 'human', 'cyborg', 'health', 'dive', 'DPS', 'projectile'],
        },
        {
            id: 9,
            name: 'Zarya',
            image: 'overwatch/ZaryaSquare.png',
            tags: ['F', 'human', 'health', 'brawl', 'tank', 'shields', 'beam'],
        },
        {
            id: 10,
            name: 'Symmetra',
            image: 'overwatch/SymmetraSquare.png',
            tags: ['F', 'human', 'shields', 'brawl', 'DPS', 'shield', 'beam'],
        },
        {
            id: 7,
            name: 'Mercy',
            image: 'overwatch/MercySquare.png',
            tags: ['F', 'human', 'health', 'poke', 'support', 'no-shield', 'projectile', 'beam'],
        },
        {
            id: 8,
            name: 'Hanzo',
            image: 'overwatch/HanzoSquare.png',
            tags: ['M', 'human', 'health', 'poke', 'DPS', 'no-shield', 'projectile'],
        },
        {
            id: 12,
            name: 'Roadhog',
            image: 'overwatch/RoadhogSquare.png',
            tags: ['M', 'human', 'health', 'brawl', 'tank', 'no-shield', 'projectile'],
        },
        {
            id: 14,
            name: 'Reaper',
            image: 'overwatch/ReaperSquare.png',
            tags: ['M', 'human', 'health', 'brawl', 'dive', 'DPS', 'no-shield', 'hitscan'],
        },
        {
            id: 15,
            name: 'Widowmaker',
            image: 'overwatch/WidowmakerSquare.png',
            tags: ['F', 'human', 'health', 'poke', 'DPS', 'no-shield', 'hitscan'],
        },
        {
            id: 16,
            name: 'D.Va',
            image: 'overwatch/DVaSquare.png',
            tags: ['F', 'human', 'armor', 'dive', 'tank', 'hitscan'],
        },
        {
            id: 18,
            name: 'Mei',
            image: 'overwatch/MeiSquare.png',
            tags: ['F', 'human', 'health', 'brawl', 'DPS', 'no-shield', 'projectile', 'beam'],
        },
        {
            id: 19,
            name: 'Sombra',
            image: 'overwatch/SombraSquare.png',
            tags: ['F', 'human', 'health', 'dive', 'DPS', 'no-shield', 'hitscan'],
        },
        {
            id: 21,
            name: 'Sigma',
            image: 'overwatch/SigmaSquare.png',
            tags: ['M', 'human', 'shields', 'poke', 'brawl', 'tank', 'shield', 'projectile'],
        },
        {
            id: 22,
            name: 'Ashe',
            image: 'overwatch/AsheSquare.png',
            tags: ['F', 'human', 'health', 'poke', 'DPS', 'no-shield', 'hitscan'],
        },
        {
            id: 23,
            name: 'Brigitte',
            image: 'overwatch/BrigitteSquare.png',
            tags: ['F', 'human', 'armor', 'brawl', 'poke', 'dive', 'support', 'shield', 'melee'],
        },
        {
            id: 24,
            name: 'Echo',
            image: 'overwatch/EchoSquare.png',
            tags: ['F', 'omnic', 'health', 'poke', 'DPS', 'no-shield', 'projectile'],
        },
        {
            id: 25,
            name: 'Pharah',
            image: 'overwatch/PharahSquare.png',
            tags: ['F', 'human', 'health', 'poke', 'DPS', 'no-shield', 'projectile'],
        },
        {
            id: 26,
            name: 'Torbjörn',
            image: 'overwatch/TorbjornSquare.png',
            tags: ['M', 'human', 'armor', 'brawl', 'DPS', 'no-shield', 'projectile'],
        },
        {
            id: 27,
            name: 'Zenyatta',
            image: 'overwatch/ZenyattaSquare.png',
            tags: ['M', 'omnic', 'health', 'shields', 'poke', 'brawl', 'support', 'no-shield', 'projectile'],
        },
        {
            id: 29,
            name: 'Soldier: 76',
            image: 'overwatch/Soldier76Square.png',
            tags: ['M', 'human', 'health', 'poke', 'brawl', 'DPS', 'no-shield', 'hitscan'],
        },
        {
            id: 30,
            name: 'Wrecking Ball',
            image: 'overwatch/WreckingBallSquare.png',
            tags: ['M', 'animal', 'health', 'armor', 'shields', 'dive', 'tank', 'no-shield', 'hitscan'],
        },
        {
            id: 32,
            name: 'Junkrat',
            image: 'overwatch/JunkratSquare.png',
            tags: ['M', 'human', 'health', 'brawl', 'DPS', 'no-shield', 'projectile'],
        },
        {
            id: 33,
            name: 'Doomfist',
            image: 'overwatch/DoomfistSquare.png',
            tags: ['M', 'human', 'health', 'dive', 'tank', 'no-shield', 'projectile'],
        },
        {
            id: 34,
            name: 'Baptiste',
            image: 'overwatch/BaptisteSquare.png',
            tags: ['M', 'human', 'health', 'poke', 'brawl', 'support', 'no-shield', 'hitscan'],
        },
        {
            id: 35,
            name: 'Junker Queen',
            image: 'overwatch/JunkerQueenSquare.png',
            tags: ['F', 'human', 'health', 'brawl', 'tank', 'no-shield', 'hitscan'],
        },
        {
            id: 36,
            name: 'Mauga',
            image: 'overwatch/MaugaSquare.png',
            tags: ['M', 'human', 'health', 'armor', 'brawl', 'tank', 'no-shield', 'hitscan'],
        },
        {
            id: 37,
            name: 'Sojourn',
            image: 'overwatch/SojournSquare.png',
            tags: ['F', 'human', 'cyborg', 'health', 'poke', 'brawl', 'DPS', 'no-shield', 'projectile'],
        },
        {
            id: 38,
            name: 'Ramattra',
            image: 'overwatch/RamattraSquare.png',
            tags: ['M', 'omnic', 'health', 'armor', 'brawl', 'tank', 'shield', 'projectile'],
        },
        {
            id: 39,
            name: 'Kiriko',
            image: 'overwatch/KirikoSquare.png',
            tags: ['F', 'human', 'health', 'dive', 'brawl', 'support', 'no-shield', 'projectile'],
        },
        {
            id: 40,
            name: 'Lifeweaver',
            image: 'overwatch/LifeweaverSquare.png',
            tags: ['M', 'human', 'health', 'shields', 'poke', 'brawl', 'support', 'no-shield', 'projectile'],
        },
        {
            id: 41,
            name: 'Illari',
            image: 'overwatch/IllariSquare.png',
            tags: ['F', 'human', 'health', 'poke', 'brawl', 'support', 'no-shield', 'hitscan', 'beam'],
        },
    ];

    charactersTemp.forEach(character => {
        character.isHidden = false;
    });

    return charactersTemp;
}
