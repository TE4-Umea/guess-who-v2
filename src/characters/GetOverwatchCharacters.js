export async function getCharactersOverwatch() {
    const charactersTemp = [
        {
            id: 16,
            name: 'D.Va',
            image: 'overwatch/DVaSquare.webp',
            tags: ['F', 'human', 'armor', 'dive', 'tank', 'hitscan', 'brownHair', 'brownEyes'],
        },
        {
            id: 33,
            name: 'Doomfist',
            image: 'overwatch/DoomfistSquare.webp',
            tags: ['M', 'human', 'health', 'dive', 'tank', 'no-shield', 'projectile', 'bald', 'yellowEyes'],
        },
        {
            id: 35,
            name: 'Junker Queen',
            image: 'overwatch/JunkerQueenSquare.webp',
            tags: ['F', 'human', 'health', 'brawl', 'tank', 'no-shield', 'hitscan', 'blueHair', 'redEyes'],
        },
        {
            id: 36,
            name: 'Mauga',
            image: 'overwatch/MaugaSquare.webp',
            tags: ['M', 'human', 'health', 'armor', 'brawl', 'tank', 'no-shield', 'hitscan', 'darkHair', 'whiteHair', 'redEyes', 'facialHair'],
        },
        {
            id: 5,
            name: 'Orisa',
            image: 'overwatch/OrisaSquare.webp',
            tags: ['F', 'omnic', 'health', 'armor', 'poke', 'brawl', 'tank', 'projectile', 'bald', 'yellowEyes'],
        },
        {
            id: 38,
            name: 'Ramattra',
            image: 'overwatch/RamattraSquare.webp',
            tags: ['M', 'omnic', 'health', 'armor', 'brawl', 'tank', 'shield', 'projectile', 'bald'],
        },
        {
            id: 1,
            name: 'Reinhardt',
            image: 'overwatch/ReinhardtSquare.webp',
            tags: ['M', 'human', 'armor', 'brawl', 'tank', 'shield', 'melee', 'whiteHair', 'blueEyes', 'facialHair'],
        },
        {
            id: 12,
            name: 'Roadhog',
            image: 'overwatch/RoadhogSquare.webp',
            tags: ['M', 'human', 'health', 'brawl', 'tank', 'no-shield', 'projectile', 'whiteHair', 'mask'],
        },
        {
            id: 21,
            name: 'Sigma',
            image: 'overwatch/SigmaSquare.webp',
            tags: ['M', 'human', 'shields', 'poke', 'brawl', 'tank', 'shield', 'projectile', 'bald', 'blueEyes'],
        },
        {
            id: 6,
            name: 'Winston',
            image: 'overwatch/WinstonSquare.webp',
            tags: ['M', 'animal', 'health', 'dive', 'tank', 'shield', 'beam', 'darkHair', 'brownEyes', 'facialHair'],
        },
        {
            id: 30,
            name: 'Wrecking Ball',
            image: 'overwatch/WreckingBallSquare.webp',
            tags: ['M', 'animal', 'health', 'armor', 'shields', 'dive', 'tank', 'no-shield', 'hitscan', 'bald', 'glasses', 'brownEyes'],
        },
        {
            id: 9,
            name: 'Zarya',
            image: 'overwatch/ZaryaSquare.webp',
            tags: ['F', 'human', 'health', 'brawl', 'tank', 'shields', 'beam', 'pinkHair', 'greenEyes'],
        },
        {
            id: 22,
            name: 'Ashe',
            image: 'overwatch/AsheSquare.webp',
            tags: ['F', 'human', 'health', 'poke', 'DPS', 'no-shield', 'hitscan', 'whiteHair', 'redEyes'],
        },
        {
            id: 3,
            name: 'Bastion',
            image: 'overwatch/BastionSquare.webp',
            tags: ['M', 'omnic', 'health', 'armor', 'brawl', 'DPS', 'hitscan', 'bald', 'blueEyes'],
        },
        {
            id: 42,
            name: 'Cassidy',
            image: 'overwatch/CassidySquare.webp',
            tags: ['M', 'human', 'health', 'brawl', 'DPS', 'hitscan', 'brownHair', 'brownHair'],
        },
        {
            id: 24,
            name: 'Echo',
            image: 'overwatch/EchoSquare.webp',
            tags: ['F', 'omnic', 'health', 'poke', 'DPS', 'no-shield', 'projectile', 'bald', 'blueEyes'],
        },
        {
            id: 8,
            name: 'Genji',
            image: 'overwatch/GenjiSquare.webp',
            tags: ['M', 'human', 'cyborg', 'health', 'dive', 'DPS', 'projectile', 'darkHair', 'mask', 'greenEyes'],
        },
        {
            id: 8,
            name: 'Hanzo',
            image: 'overwatch/HanzoSquare.webp',
            tags: ['M', 'human', 'health', 'poke', 'DPS', 'no-shield', 'projectile', 'darkHair', 'brownEyes', 'facialHair'],
        },
        {
            id: 32,
            name: 'Junkrat',
            image: 'overwatch/JunkratSquare.webp',
            tags: ['M', 'human', 'health', 'brawl', 'DPS', 'no-shield', 'projectile', 'blonde', 'glasses', 'brownEyes'],
        },
        {
            id: 18,
            name: 'Mei',
            image: 'overwatch/MeiSquare.webp',
            tags: ['F', 'human', 'health', 'brawl', 'DPS', 'no-shield', 'projectile', 'beam', 'brownHair', 'glasses', 'brownEyes'],
        },
        {
            id: 25,
            name: 'Pharah',
            image: 'overwatch/PharahSquare.webp',
            tags: ['F', 'human', 'health', 'poke', 'DPS', 'no-shield', 'projectile', 'darkHair', 'brownEyes'],
        },
        {
            id: 14,
            name: 'Reaper',
            image: 'overwatch/ReaperSquare.webp',
            tags: ['M', 'human', 'health', 'brawl', 'dive', 'DPS', 'no-shield', 'hitscan', 'brownHair', 'mask'],
        },
        {
            id: 37,
            name: 'Sojourn',
            image: 'overwatch/SojournSquare.webp',
            tags: ['F', 'human', 'cyborg', 'health', 'poke', 'brawl', 'DPS', 'no-shield', 'projectile', 'whiteHair', 'blueEyes'],
        },
        {
            id: 29,
            name: 'Soldier: 76',
            image: 'overwatch/Soldier76Square.webp',
            tags: ['M', 'human', 'health', 'poke', 'brawl', 'DPS', 'no-shield', 'hitscan', 'whiteHair', 'glasses', 'facialHair'],
        },
        {
            id: 19,
            name: 'Sombra',
            image: 'overwatch/SombraSquare.webp',
            tags: ['F', 'human', 'health', 'dive', 'DPS', 'no-shield', 'hitscan', 'purpleEyes'],
        },
        {
            id: 10,
            name: 'Symmetra',
            image: 'overwatch/SymmetraSquare.webp',
            tags: ['F', 'human', 'shields', 'brawl', 'DPS', 'shield', 'beam', 'darkHair', 'glasses', 'brownEyes'],
        },
        {
            id: 26,
            name: 'Torbjörn',
            image: 'overwatch/TorbjornSquare.webp',
            tags: ['M', 'human', 'armor', 'brawl', 'DPS', 'no-shield', 'projectile', 'blonde', 'glasses', 'yellowEyes', 'facialHair'],
        },
        {
            id: 2,
            name: 'Tracer',
            image: 'overwatch/TracerSquare.webp',
            tags: ['F', 'human', 'health', 'dive', 'DPS', 'hitscan', 'brownHair', 'glasses', 'orangeEyes'],
        },
        {
            id: 15,
            name: 'Widowmaker',
            image: 'overwatch/WidowmakerSquare.webp',
            tags: ['F', 'human', 'health', 'poke', 'DPS', 'no-shield', 'hitscan', 'darkHair', 'glasses', 'yellowEyes'],
        },
        {
            id: 7,
            name: 'Ana',
            image: 'overwatch/AnaSquare.webp',
            tags: ['F', 'human', 'health', 'brawl', 'poke', 'dive', 'support', 'hitscan', 'projectile', 'whiteHair', 'brownEyes'],
        },
        {
            id: 34,
            name: 'Baptiste',
            image: 'overwatch/BaptisteSquare.webp',
            tags: ['M', 'human', 'health', 'poke', 'brawl', 'support', 'no-shield', 'hitscan', 'darkHair', 'glasses', 'brownEyes'],
        },
        {
            id: 23,
            name: 'Brigitte',
            image: 'overwatch/BrigitteSquare.webp',
            tags: ['F', 'human', 'armor', 'brawl', 'poke', 'dive', 'support', 'shield', 'melee', 'ginger', 'brownEyes'],
        },
        {
            id: 41,
            name: 'Illari',
            image: 'overwatch/IllariSquare.webp',
            tags: ['F', 'human', 'health', 'poke', 'brawl', 'support', 'no-shield', 'hitscan', 'beam', 'darkHair', 'yellowEyes'],
        },
        {
            id: 39,
            name: 'Kiriko',
            image: 'overwatch/KirikoSquare.webp',
            tags: ['F', 'human', 'health', 'dive', 'brawl', 'support', 'no-shield', 'projectile', 'greenHair', 'brownEyes'],
        },
        {
            id: 40,
            name: 'Lifeweaver',
            image: 'overwatch/LifeweaverSquare.webp',
            tags: ['M', 'human', 'health', 'shields', 'poke', 'brawl', 'support', 'no-shield', 'projectile', 'whiteHair', 'brownEyes'],
        },
        {
            id: 43,
            name: 'Lúcio',
            image: 'overwatch/LucioSquare.webp',
            tags: ['M', 'human', 'health', 'dive', 'brawl', 'support', 'projectile', 'brownHair', 'brownEyes'],
        },
        {
            id: 7,
            name: 'Mercy',
            image: 'overwatch/MercySquare.webp',
            tags: ['F', 'human', 'health', 'poke', 'support', 'no-shield', 'projectile', 'beam', 'blonde', 'blueEyes'],
        },
        {
            id: 4,
            name: 'Moira',
            image: 'overwatch/MoiraSquare.webp',
            tags: ['F', 'human', 'health', 'brawl', 'support', 'beam', 'ginger', 'mask', 'blueEyes', 'redEyes'],
        },
        {
            id: 27,
            name: 'Zenyatta',
            image: 'overwatch/ZenyattaSquare.webp',
            tags: ['M', 'omnic', 'health', 'shields', 'poke', 'brawl', 'support', 'no-shield', 'projectile', 'bald'],
        },
    ];

    charactersTemp.forEach(character => {
        character.isHidden = false;
    });

    return charactersTemp;
}
