export async function getCharactersJJK() {
    const charactersTemp = [
        {
            id: 1,
            name: 'Yuji Itadori',
            image: 'jjk/Yuji.webp',
            tags: ['M', 'human', 'pinkHair', 'brownEyes', 'sorcerer', 'RCT', 'alive', 'black-flash', 'cullingGames'],
        },
        {
            id: 2,
            name: 'Megumi Fushiguro',
            image: 'jjk/Megumi.webp',
            tags: ['M', 'human', 'darkHair', 'blueEyes', 'CT', 'sorcerer', 'unknown', 'domain', 'weapon', 'grade2', 'cullingGames'],
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
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'sorcerer', 'RCT', 'domain', 'simple', 'alive', 'black-flash', 'weapon', 'specialgrade', 'cullingGames'],
        },
        {
            id: 6,
            name: 'Maki Zenin',
            image: 'jjk/Maki.webp',
            tags: ['F', 'human', 'darkHair', 'blueEyes', 'sorcerer', 'alive', 'weapon', 'grade4', 'heavenlyRestriction', 'cullingGames'],
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
            tags: ['M', 'cursedCorpse', 'curse', 'darkHair', 'whiteHair', 'brownEyes', 'CT', 'sorcerer', 'alive', 'weapon', 'semigrade2', 'cullingGames'],
        },
        {
            id: 9,
            name: 'Kinji Hakari',
            image: 'jjk/Hakari.webp',
            tags: ['M', 'human', 'pinkHair', 'darkEyes', 'CT', 'sorcerer', 'alive', 'RCT', 'domain', 'cullingGames'],
        },
        {
            id: 10,
            name: 'Ryomen Sukuna',
            image: 'jjk/Sukuna.webp',
            tags: ['M', 'curse', 'pinkHair', 'redEyes', 'CT', 'RCT', 'alive', 'domain', 'specialgrade', 'simple', 'cullingGames'],
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
            tags: ['human', 'darkHair', 'pinkHair', 'pinkEyes', 'sorcerer', 'CT', 'alive'],
        },
        {
            id: 15,
            name: 'Mai Zenin',
            image: 'jjk/Mai.webp',
            tags: ['F', 'human', 'darkHair', 'brownEyes', 'sorcerer', 'CT', 'weapon', 'dead'],
        },
        {
            id: 16,
            name: 'Kokichi Muta',
            image: 'jjk/Kokichi.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'sorcerer', 'dead', 'weapon', 'semigrade1', 'heavenlyRestriction'],
        },
        {
            id: 17,
            name: 'Kasumi Miwa',
            image: 'jjk/Miwa.webp',
            tags: ['F', 'human', 'blueHair', 'blueEyes', 'sorcerer', 'simple', 'alive', 'weapon', 'cullingGames'],
        },
        {
            id: 18,
            name: 'Noritoshi Kamo',
            image: 'jjk/Noritoshi.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'sorcerer', 'alive', 'weapon', 'semigrade1', 'cullingGames'],
        },
        {
            id: 19,
            name: 'Momo Nishimiya',
            image: 'jjk/Momo.webp',
            tags: ['F', 'human', 'blondeHair', 'blueEyes', 'CT', 'sorcerer', 'alive', 'weapon', 'cullingGames'],
        },
        {
            id: 20,
            name: 'Utahime Iori',
            image: 'jjk/Utahime.webp',
            tags: ['F', 'human', 'darkHair', 'brownEyes', 'CT', 'sorcerer', 'alive', 'semigrade1'],
        },
        {
            id: 21,
            name: 'Takuma Ino',
            image: 'jjk/Ino.webp',
            tags: ['M', 'human', 'browndarkHair', 'darkEyes', 'CT', 'sorcerer', 'alive', 'weapon', 'grade2'],
        },
        {
            id: 22,
            name: 'Mei Mei',
            image: 'jjk/Meimei.webp',
            tags: ['F', 'human', 'blueHair', 'blueEyes', 'CT', 'sorcerer', 'alive', 'weapon', 'grade1'],
        },
        {
            id: 23,
            name: 'Ui Ui',
            image: 'jjk/Uiui.webp',
            tags: ['M', 'human', 'blueHair', 'blueEyes', 'CT', 'sorcerer', 'simple', 'alive', 'cullingGames'],
        },
        {
            id: 24,
            name: 'Yuki Tsukumo',
            image: 'jjk/Yuki.webp',
            tags: ['F', 'human', 'blondeHair', 'brownEyes', 'CT', 'sorcerer', 'RCT', 'domain', 'simple', 'dead', 'specialgrade'],
        },
        {
            id: 25,
            name: 'Tengen',
            image: 'jjk/Tengen.webp',
            tags: ['F', 'human', 'curse', 'CT', 'sorcerer', 'alive'],
        },
        {
            id: 26,
            name: 'Naobito Zenin',
            image: 'jjk/Naobito.webp',
            tags: ['M', 'human', 'whiteHair', 'darkEyes', 'CT', 'sorcerer', 'simple', 'dead', 'specialgrade1'],
        },
        {
            id: 27,
            name: 'Naoya Zenin',
            image: 'jjk/Naoya.webp',
            tags: ['M', 'human', 'curse', 'blondeHair', 'brownEyes', 'CT', 'sorcerer', 'dead', 'weapon', 'specialgrade1', 'cullingGames'],
        },
        {
            id: 28,
            name: 'Hajime Kashimo',
            image: 'jjk/Kashimo.webp',
            tags: ['M', 'human', 'blueHair', 'blueEyes', 'CT', 'sorcerer', 'simple', 'dead', 'weapon', 'incarnated', 'cullingGames'],
        },
        {
            id: 29,
            name: 'Hana Kurusu',
            image: 'jjk/Hana.webp',
            tags: ['F', 'human', 'blondeHair', 'blueEyes', 'CT', 'sorcerer', 'alive', 'cullingGames'],
        },
        {
            id: 30,
            name: 'Hiromi Higaruma',
            image: 'jjk/Higaruma.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'RCT', 'domain', 'simple', 'dead', 'weapon', 'cullingGames'],
        },
        {
            id: 31,
            name: 'Fumihiko Tabata',
            image: 'jjk/Tabata.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'alive', 'specialgrade', 'cullingGames'],
        },
        {
            id: 32,
            name: 'Yorozu',
            image: 'jjk/Yorozu.webp',
            tags: ['F', 'human', 'darkHair', 'darkEyes', 'CT', 'sorcerer', 'domain', 'dead', 'incarnated', 'cullingGames'],
        },
        {
            id: 33,
            name: 'Reggie Star',
            image: 'jjk/Reggie.webp',
            tags: ['M', 'human', 'blondeHair', 'CT', 'sorcerer', 'RCT', 'simple', 'dead', 'incarnated', 'cullingGames'],
        },
        {
            id: 34,
            name: 'Iori Hazenoki',
            image: 'jjk/Iori.webp',
            tags: ['M', 'human', 'blondeHair', 'CT', 'sorcerer', 'RCT', 'dead', 'incarnated', 'cullingGames'],
        },
        {
            id: 35,
            name: 'Ryu Ishigori',
            image: 'jjk/Ryu.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'sorcerer', 'domain', 'dead', 'incarnated', 'cullingGames'],
        },
        {
            id: 36,
            name: 'Takako Uro',
            image: 'jjk/Uro.webp',
            tags: ['F', 'human', 'blueHair', 'darkEyes', 'CT', 'sorcerer', 'domain', 'alive', 'incarnated', 'cullingGames'],
        },
        {
            id: 37,
            name: 'Charles Bernard',
            image: 'jjk/Charles.webp',
            tags: ['M', 'human', 'blueHair', 'blueEyes', 'CT', 'alive', 'weapon', 'cullingGames'],
        },
        {
            id: 38,
            name: 'Jogo',
            image: 'jjk/Jogo.webp',
            tags: ['M', 'curse', 'redEyes', 'CT', 'domain', 'simple', 'dead'],
        },
        {
            id: 39,
            name: 'Hanami',
            image: 'jjk/Hanami.webp',
            tags: ['F', 'curse', 'CT', 'domain', 'simple', 'dead'],
        },
        {
            id: 40,
            name: 'Dagon',
            image: 'jjk/Dagon.webp',
            tags: ['M', 'curse', 'whiteEyes', 'CT', 'domain', 'dead'],
        },
        {
            id: 41,
            name: 'Toji Fushiguro',
            image: 'jjk/Toji.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'dead', 'weapon', 'heavenlyRestriction'],
        },
        {
            id: 42,
            name: 'Rika',
            image: 'jjk/Rika.webp',
            tags: ['F', 'curse', 'CT', 'dead', 'cullingGames'],
        },
        {
            id: 43,
            name: 'Choso',
            image: 'jjk/Choso.webp',
            tags: ['M', 'deathPainting', 'curse', 'darkHair', 'darkEyes', 'CT', 'alive'],
        },
        {
            id: 44,
            name: 'Suguru Geto',
            image: 'jjk/Geto.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'sorcerer', 'dead', 'weapon', 'specialgrade'],
        },
        {
            id: 45,
            name: 'Kenjaku',
            image: 'jjk/Kenjaku.webp',
            tags: ['M', 'human', 'darkHair', 'darkEyes', 'CT', 'sorcerer', 'RCT', 'domain', 'simple', 'dead'],
        },
        {
            id: 46,
            name: 'Uraume',
            image: 'jjk/Uraume.webp',
            tags: ['F', 'human', 'whiteHair', 'pinkHair', 'redEyes', 'CT', 'sorcerer', 'alive'],
        },
        {
            id: 47,
            name: 'Haruta Shigemo',
            image: 'jjk/Haruta.webp',
            tags: ['M', 'human', 'blondeHair', 'brownEyes', 'CT', 'sorcerer', 'dead', 'weapon'],
        },
        {
            id: 48,
            name: 'Masamichi Yaga',
            image: 'jjk/Masamichi.webp',
            tags: ['M', 'human', 'darkHair', 'brownEyes', 'sorcerer', 'dead', 'grade1'],
        },
        {
            id: 49,
            name: 'Atsuya Kusakabe',
            image: 'jjk/Kusakabe.webp',
            tags: ['M', 'human', 'brownHair', 'darkEyes', 'sorcerer', 'simple', 'alive', 'weapon', 'grade1'],
        },
        {
            id: 50,
            name: 'Yoshinobu Gakuganji',
            image: 'jjk/Yoshinobu.webp',
            tags: ['M', 'human', 'whiteHair', 'CT', 'sorcerer', 'alive'],
        },
    ];

    charactersTemp.forEach(character => {
        character.isHidden = false;
    });

    return charactersTemp;
}
