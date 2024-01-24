export async function getCharactersFromDatabase() {
    // Cconst characters = await prisma.character.findMany({})
    const charactersTemp = [
        {
            id: 1,
            name: 'Aatrox',
            image: 'leagueoflegends/AatroxSquare.png',
            tags: ['M', 'darkin', 'shurima', 'bruiser', 'top', 'melee', 'manaless'],
        },
        {
            id: 2,
            name: 'Ahri',
            image: 'leagueoflegends/AhriSquare.png',
            tags: ['F', 'vastaya', 'ionia', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 3,
            name: 'Akali',
            image: 'leagueoflegends/AkaliSquare.png',
            tags: ['F', 'human', 'ionia', 'assassin', 'mid', 'melee', 'energy'],
        },
        {
            id: 156,
            name: 'Akshan',
            image: 'leagueoflegends/AkshanSquare.png',
            tags: ['M', 'human', 'shurima', 'marksman', 'mid', 'ranged', 'mana'],
        },
        {
            id: 4,
            name: 'Alistar',
            image: 'leagueoflegends/AlistarSquare.png',
            tags: ['M', 'minotaur', 'runeterra', 'tank', 'support', 'melee', 'mana'],
        },
        {
            id: 5,
            name: 'Amumu',
            image: 'leagueoflegends/AmumuSquare.png',
            tags: ['M', 'yordle', 'runeterra', 'tank', 'jungle', 'melee', 'mana'],
        },
        {
            id: 6,
            name: 'Anivia',
            image: 'leagueoflegends/AniviaSquare.png',
            tags: ['F', 'god', 'freljord', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 7,
            name: 'Annie',
            image: 'leagueoflegends/AnnieSquare.png',
            tags: ['F', 'human', 'noxus', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 8,
            name: 'Aphelios',
            image: 'leagueoflegends/ApheliosSquare.png',
            tags: ['M', 'lunari', 'targon', 'marksman', 'bot', 'ranged', 'manaless'],
        },
        {
            id: 9,
            name: 'Ashe',
            image: 'leagueoflegends/AsheSquare.png',
            tags: ['F', 'freljord', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 10,
            name: 'Aurelion Sol',
            image: 'leagueoflegends/Aurelion_SolSquare.png',
            tags: ['M', 'dragon', 'god', 'targon', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 11,
            name: 'Azir',
            image: 'leagueoflegends/AzirSquare.png',
            tags: ['M', 'ascended', 'shurima', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 12,
            name: 'Bard',
            image: 'leagueoflegends/BardSquare.png',
            tags: ['M', 'celestial', 'runeterra', 'support', 'bot', 'ranged', 'mana'],
        },
        {
            id: 160,
            name: 'Bel Veth',
            image: 'leagueoflegends/BelvethSquare.jpg',
            tags: ['F', 'voidborn', 'void', 'bruiser', 'jungle', 'melee', 'manaless'],
        },
        {
            id: 13,
            name: 'Blitzcrank',
            image: 'leagueoflegends/BlitzcrankSquare.png',
            tags: ['M', 'golem', 'robot', 'zaun', 'tank', 'support', 'bot', 'melee', 'mana'],
        },
        {
            id: 14,
            name: 'Brand',
            image: 'leagueoflegends/BrandSquare.png',
            tags: ['M', 'human', 'freljord', 'mage', 'support', 'bot', 'mid', 'ranged', 'mana'],
        },
        {
            id: 15,
            name: 'Braum',
            image: 'leagueoflegends/BraumSquare.png',
            tags: ['M', 'human', 'freljord', 'tank', 'support', 'bot', 'melee', 'mana'],
        },
        {
            id: 165,
            name: 'Briar',
            image: 'leagueoflegends/BriarSquare.jpg',
            tags: ['F', 'golem', 'noxus', 'assassin', 'bruiser', 'jungle', 'melee', 'manaless'],
        },
        {
            id: 16,
            name: 'Caitlyn',
            image: 'leagueoflegends/CaitlynSquare.png',
            tags: ['F', 'human', 'piltover', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 17,
            name: 'Camille',
            image: 'leagueoflegends/CamilleSquare.png',
            tags: ['F', 'human', 'robot', 'piltover', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 18,
            name: 'Cassiopeia',
            image: 'leagueoflegends/CassiopeiaSquare.png',
            tags: ['F', 'human', 'noxus', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 19,
            name: 'Cho Gath',
            image: 'leagueoflegends/ChoGathSquare.png',
            tags: ['M', 'voidborn', 'void', 'runeterra', 'tank', 'top', 'melee', 'mana'],
        },
        {
            id: 20,
            name: 'Corki',
            image: 'leagueoflegends/CorkiSquare.png',
            tags: ['M', 'yordle', 'bandlecity', 'marksman', 'mid', 'ranged', 'mana'],
        },
        {
            id: 21,
            name: 'Darius',
            image: 'leagueoflegends/DariusSquare.png',
            tags: ['M', 'human', 'noxian', 'fighter', 'top', 'melee', 'manaless'],
        },
        {
            id: 22,
            name: 'Diana',
            image: 'leagueoflegends/DianaSquare.png',
            tags: ['F', 'lunari', 'targon', 'assassin', 'mid', 'melee', 'mana'],
        },
        {
            id: 23,
            name: 'Dr. Mundo',
            image: 'leagueoflegends/Dr._MundoSquare.png',
            tags: ['M', 'human', 'zaun', 'tank', 'top', 'melee', 'health'],
        },
        {
            id: 24,
            name: 'Draven',
            image: 'leagueoflegends/DravenSquare.png',
            tags: ['M', 'human', 'noxian', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 25,
            name: 'Ekko',
            image: 'leagueoflegends/EkkoSquare.png',
            tags: ['M', 'human', 'zaun', 'assassin', 'mid', 'melee', 'mana'],
        },
        {
            id: 26,
            name: 'Elise',
            image: 'leagueoflegends/EliseSquare.png',
            tags: ['F', 'human', 'noxus', 'shadow-isles', 'mage', 'jungle', 'ranged', 'mana'],
        },
        {
            id: 27,
            name: 'Evelynn',
            image: 'leagueoflegends/EvelynnSquare.png',
            tags: ['F', 'demon', 'runeterra', 'assassin', 'jungle', 'melee', 'mana'],
        },
        {
            id: 28,
            name: 'Ezreal',
            image: 'leagueoflegends/EzrealSquare.png',
            tags: ['M', 'human', 'piltover', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 29,
            name: 'Fiddlesticks',
            image: 'leagueoflegends/FiddlesticksSquare.png',
            tags: ['M', 'demon', 'runeterra', 'mage', 'support', 'jungle', 'ranged', 'mana'],
        },
        {
            id: 30,
            name: 'Fiora',
            image: 'leagueoflegends/FioraSquare.png',
            tags: ['F', 'human', 'demacia', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 31,
            name: 'Fizz',
            image: 'leagueoflegends/FizzSquare.png',
            tags: ['M', 'yordle', 'bilgewater', 'assassin', 'mid', 'melee', 'mana'],
        },
        {
            id: 32,
            name: 'Galio',
            image: 'leagueoflegends/GalioSquare.png',
            tags: ['M', 'golem', 'demacia', 'tank', 'support', 'mid', 'melee', 'mana'],
        },
        {
            id: 33,
            name: 'Gangplank',
            image: 'leagueoflegends/GangplankSquare.png',
            tags: ['M', 'human', 'bilgewater', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 34,
            name: 'Garen',
            image: 'leagueoflegends/GarenSquare.png',
            tags: ['M', 'human', 'demacia', 'fighter', 'top', 'melee', 'manaless'],
        },
        {
            id: 35,
            name: 'Gnar',
            image: 'leagueoflegends/GnarSquare.png',
            tags: ['M', 'yordle', 'freljord', 'fighter', 'top', 'ranged', 'melee', 'rage'],
        },
        {
            id: 36,
            name: 'Gragas',
            image: 'leagueoflegends/GragasSquare.png',
            tags: ['M', 'human', 'freljord', 'tank', 'jungle', 'melee', 'mana'],
        },
        {
            id: 37,
            name: 'Graves',
            image: 'leagueoflegends/GravesSquare.png',
            tags: ['M', 'human', 'bilgewater', 'marksman', 'jungle', 'ranged', 'mana'],
        },
        {
            id: 155,
            name: 'Gwen',
            image: 'leagueoflegends/GwenSquare.png',
            tags: ['F', 'spirit', 'camavor', 'shadow-isles', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 38,
            name: 'Hecarim',
            image: 'leagueoflegends/HecarimSquare.png',
            tags: ['M', 'shadow-isles', 'camavor', 'fighter', 'jungle', 'melee', 'mana'],
        },
        {
            id: 39,
            name: 'Heimerdinger',
            image: 'leagueoflegends/HeimerdingerSquare.png',
            tags: ['M', 'yordle', 'piltover', 'mage', 'top', 'ranged', 'mana'],
        },
        {
            id: 166,
            name: 'Hwei',
            image: 'leagueoflegends/HweiSquare.jpg',
            tags: ['M', 'human', 'ionia', 'mage', 'mid', 'support', 'ranged', 'mana'],
        },
        {
            id: 40,
            name: 'Illaoi',
            image: 'leagueoflegends/IllaoiSquare.png',
            tags: ['F', 'human', 'bilgewater', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 41,
            name: 'Irelia',
            image: 'leagueoflegends/IreliaSquare.png',
            tags: ['F', 'human', 'ionia', 'fighter', 'mid', 'top', 'melee', 'mana'],
        },
        {
            id: 42,
            name: 'Ivern',
            image: 'leagueoflegends/IvernSquare.png',
            tags: ['M', 'human', 'tree', 'ionia', 'freljord', 'support', 'jungle', 'mana'],
        },
        {
            id: 43,
            name: 'Janna',
            image: 'leagueoflegends/JannaSquare.png',
            tags: ['F', 'celestial', 'zaun', 'shurima', 'support', 'ranged', 'mana'],
        },
        {
            id: 44,
            name: 'Jarvan IV',
            image: 'leagueoflegends/Jarvan_IVSquare.png',
            tags: ['M', 'human', 'demacia', 'tank', 'jungle', 'melee', 'mana'],
        },
        {
            id: 45,
            name: 'Jax',
            image: 'leagueoflegends/JaxSquare.png',
            tags: ['M', 'human', 'icathia', 'shurima', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 46,
            name: 'Jayce',
            image: 'leagueoflegends/JayceSquare.png',
            tags: ['M', 'human', 'piltover', 'fighter', 'top', 'ranged', 'mana'],
        },
        {
            id: 47,
            name: 'Jhin',
            image: 'leagueoflegends/JhinSquare.png',
            tags: ['M', 'human', 'ionia', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 48,
            name: 'Jinx',
            image: 'leagueoflegends/JinxSquare.png',
            tags: ['F', 'human', 'zaun', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 49,
            name: 'Kai Sa',
            image: 'leagueoflegends/KaiSaSquare.png',
            tags: ['F', 'human', 'void', 'shurima', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 50,
            name: 'Kalista',
            image: 'leagueoflegends/KalistaSquare.png',
            tags: ['F', 'undead', 'shadow-isles', 'camavor', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 51,
            name: 'Karma',
            image: 'leagueoflegends/KarmaSquare.png',
            tags: ['F', 'human', 'ionia', 'mage', 'support', 'mid', 'ranged', 'mana'],
        },
        {
            id: 52,
            name: 'Karthus',
            image: 'leagueoflegends/KarthusSquare.png',
            tags: ['M', 'undead', 'shadow-isles', 'mage', 'mid', 'bot', 'ranged', 'mana'],
        },
        {
            id: 53,
            name: 'Kassadin',
            image: 'leagueoflegends/KassadinSquare.png',
            tags: ['M', 'human', 'void', 'shurima', 'mage', 'mid', 'melee', 'mana'],
        },
        {
            id: 54,
            name: 'Katarina',
            image: 'leagueoflegends/KatarinaSquare.png',
            tags: ['F', 'noxus', 'assassin', 'mid', 'melee', 'manaless'],
        },
        {
            id: 55,
            name: 'Kayle',
            image: 'leagueoflegends/KayleSquare.png',
            tags: ['F', 'aspect', 'targon', 'demacia', 'fighter', 'top', 'ranged', 'mana'],
        },
        {
            id: 56,
            name: 'Kayn',
            image: 'leagueoflegends/KaynSquare.png',
            tags: ['M', 'human', 'darkin', 'shurima', 'ionia', 'noxus', 'assassin', 'bruiser', 'jungle', 'melee', 'mana'],
        },
        {
            id: 57,
            name: 'Kennen',
            image: 'leagueoflegends/KennenSquare.png',
            tags: ['M', 'yordle', 'ionia', 'bandlecity', 'mage', 'top', 'ranged', 'energy'],
        },
        {
            id: 58,
            name: 'Kha Zix',
            image: 'leagueoflegends/KhaZixSquare.png',
            tags: ['M', 'voidborn', 'void', 'assassin', 'jungle', 'melee', 'mana'],
        },
        {
            id: 59,
            name: 'Kindred',
            image: 'leagueoflegends/KindredSquare.png',
            tags: ['M', 'F', 'spirit', 'runeterra', 'marksman', 'jungle', 'ranged', 'mana'],
        },
        {
            id: 60,
            name: 'Kled',
            image: 'leagueoflegends/KledSquare.png',
            tags: ['M', 'yordle', 'noxus', 'fighter', 'top', 'melee', 'courage'],
        },
        {
            id: 61,
            name: 'Kog Maw',
            image: 'leagueoflegends/KogMawSquare.png',
            tags: ['M', 'void', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 162,
            name: 'K Sante',
            image: 'leagueoflegends/KSanteSquare.webp',
            tags: ['M', 'human', 'shurima', 'tank', 'bruiser', 'assassin', 'top', 'melee', 'mana'],
        },
        {
            id: 62,
            name: 'LeBlanc',
            image: 'leagueoflegends/LeBlancSquare.png',
            tags: ['F', 'noxus', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 63,
            name: 'Lee Sin',
            image: 'leagueoflegends/Lee_SinSquare.png',
            tags: ['M', 'human', 'ionia', 'fighter', 'jungle', 'melee', 'energy'],
        },
        {
            id: 64,
            name: 'Leona',
            image: 'leagueoflegends/LeonaSquare.png',
            tags: ['F', 'solari', 'targon', 'tank', 'support', 'melee', 'mana'],
        },
        {
            id: 65,
            name: 'Lillia',
            image: 'leagueoflegends/LilliaSquare.png',
            tags: ['F', 'spirit', 'ionia', 'fighter', 'jungle', 'melee', 'mana'],
        },
        {
            id: 66,
            name: 'Lissandra',
            image: 'leagueoflegends/LissandraSquare.png',
            tags: ['F', 'iceborne', 'freljord', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 67,
            name: 'Lucian',
            image: 'leagueoflegends/LucianSquare.png',
            tags: ['M', 'human', 'demacia', 'shadow-isles', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 68,
            name: 'Lulu',
            image: 'leagueoflegends/LuluSquare.png',
            tags: ['F', 'yordle', 'bandlecity', 'mage', 'support', 'ranged', 'mana'],
        },
        {
            id: 69,
            name: 'Lux',
            image: 'leagueoflegends/LuxSquare.png',
            tags: ['F', 'human', 'demacia', 'mage', 'support', 'mid', 'ranged', 'mana'],
        },
        {
            id: 70,
            name: 'Malphite',
            image: 'leagueoflegends/MalphiteSquare.png',
            tags: ['M', 'golem', 'ixtal', 'tank', 'top', 'melee', 'mana'],
        },
        {
            id: 71,
            name: 'Malzahar',
            image: 'leagueoflegends/MalzaharSquare.png',
            tags: ['M', 'human', 'void', 'shurima', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 72,
            name: 'Maokai',
            image: 'leagueoflegends/MaokaiSquare.png',
            tags: ['M', 'tree', 'shadow-isles', 'tank', 'top', 'melee', 'mana'],
        },
        {
            id: 73,
            name: 'Master Yi',
            image: 'leagueoflegends/Master_YiSquare.png',
            tags: ['M', 'human', 'ionia', 'assassin', 'jungle', 'melee', 'mana'],
        },
        {
            id: 163,
            name: 'Milio',
            image: 'leagueoflegends/MilioSquare.jpg',
            tags: ['M', 'human', 'ixtal', 'enchanter', 'support', 'ranged', 'mana'],
        },
        {
            id: 74,
            name: 'Miss Fortune',
            image: 'leagueoflegends/MissFortuneSquare.png',
            tags: ['F', 'human', 'bilgewater', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 75,
            name: 'Mordekaiser',
            image: 'leagueoflegends/MordekaiserSquare.png',
            tags: ['M', 'revenant', 'shadow-isles', 'fighter', 'top', 'melee', 'shield'],
        },
        {
            id: 76,
            name: 'Morgana',
            image: 'leagueoflegends/MorganaSquare.png',
            tags: ['F', 'aspect', 'runeterra', 'mage', 'support', 'mid', 'ranged', 'mana'],
        },
        {
            id: 164,
            name: 'Naafiri',
            image: 'leagueoflegends/NaafiriSquare.webp',
            tags: ['F', 'darkin', 'dog', 'dawg-wit-de-butta-on-im', 'shurima', 'assassin', 'mid', 'melee', 'mana'],
        },
        {
            id: 77,
            name: 'Nami',
            image: 'leagueoflegends/NamiSquare.png',
            tags: ['F', 'vastaya', 'bilgewater', 'support', 'bot', 'ranged', 'mana'],
        },
        {
            id: 78,
            name: 'Nasus',
            image: 'leagueoflegends/NasusSquare.png',
            tags: ['M', 'ascended', 'shurima', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 79,
            name: 'Nautilus',
            image: 'leagueoflegends/NautilusSquare.png',
            tags: ['M', 'titan', 'bilgewater', 'tank', 'support', 'bot', 'melee', 'mana'],
        },
        {
            id: 80,
            name: 'Neeko',
            image: 'leagueoflegends/NeekoSquare.png',
            tags: ['F', 'vastaya', 'runeterra', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 81,
            name: 'Nidalee',
            image: 'leagueoflegends/NidaleeSquare.png',
            tags: ['F', 'vastaya', 'ixtal', 'assassin', 'jungle', 'ranged', 'melee', 'mana'],
        },
        {
            id: 161,
            name: 'Nilah',
            image: 'leagueoflegends/NilahSquare.webp',
            tags: ['F', 'human', 'bilgewater', 'kathkan', 'bruiser', 'bot', 'melee', 'mana'],
        },
        {
            id: 82,
            name: 'Nocturne',
            image: 'leagueoflegends/NocturneSquare.png',
            tags: ['M', 'demon', 'runeterra', 'assassin', 'jungle', 'melee', 'mana'],
        },
        {
            id: 83,
            name: 'Nunu & Willump',
            image: 'leagueoflegends/Nunu&WillumpSquare.png',
            tags: ['M', 'human', 'yeti', 'freljord', 'tank', 'jungle', 'melee', 'mana'],
        },
        {
            id: 84,
            name: 'Olaf',
            image: 'leagueoflegends/OlafSquare.png',
            tags: ['M', 'human', 'freljord', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 85,
            name: 'Orianna',
            image: 'leagueoflegends/OriannaSquare.png',
            tags: ['F', 'golem', 'piltover', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 86,
            name: 'Ornn',
            image: 'leagueoflegends/OrnnSquare.png',
            tags: ['M', 'god', 'freljord', 'tank', 'top', 'melee', 'mana'],
        },
        {
            id: 87,
            name: 'Pantheon',
            image: 'leagueoflegends/PantheonSquare.png',
            tags: ['M', 'human', 'aspect', 'targon', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 88,
            name: 'Poppy',
            image: 'leagueoflegends/PoppySquare.png',
            tags: ['F', 'yordle', 'demacia', 'bandlecity', 'tank', 'top', 'melee', 'mana'],
        },
        {
            id: 89,
            name: 'Pyke',
            image: 'leagueoflegends/PykeSquare.png',
            tags: ['M', 'undead', 'bilgewater', 'assassin', 'support', 'melee', 'mana'],
        },
        {
            id: 90,
            name: 'Qiyana',
            image: 'leagueoflegends/QiyanaSquare.png',
            tags: ['F', 'human', 'ixtal', 'assassin', 'mid', 'melee', 'mana'],
        },
        {
            id: 91,
            name: 'Quinn',
            image: 'leagueoflegends/QuinnSquare.png',
            tags: ['F', 'human', 'demacia', 'marksman', 'top', 'ranged', 'mana'],
        },
        {
            id: 92,
            name: 'Rakan',
            image: 'leagueoflegends/RakanSquare.png',
            tags: ['M', 'vastaya', 'ionia', 'support', 'bot', 'melee', 'mana'],
        },
        {
            id: 93,
            name: 'Rammus',
            image: 'leagueoflegends/RammusSquare.png',
            tags: ['M', 'god', 'shurima', 'tank', 'jungle', 'melee', 'mana'],
        },
        {
            id: 94,
            name: 'Rek Sai',
            image: 'leagueoflegends/RekSaiSquare.png',
            tags: ['F', 'void', 'shurima', 'fighter', 'jungle', 'melee', 'fury'],
        },
        {
            id: 95,
            name: 'Rell',
            image: 'leagueoflegends/RellSquare.png',
            tags: ['F', 'human', 'noxus', 'tank', 'support', 'jungle', 'melee', 'mana'],
        },
        {
            id: 159,
            name: 'Renata Glasc',
            image: 'leagueoflegends/RenataSquare.jpg',
            tags: ['F', 'human', 'zaun', 'support', 'ranged', 'mana'],
        },
        {
            id: 96,
            name: 'Renekton',
            image: 'leagueoflegends/RenektonSquare.png',
            tags: ['M', 'ascended', 'shurima', 'fighter', 'top', 'melee', 'fury'],
        },
        {
            id: 97,
            name: 'Rengar',
            image: 'leagueoflegends/RengarSquare.png',
            tags: ['M', 'vastaya', 'ixtal', 'assassin', 'jungle', 'melee', 'ferocity'],
        },
        {
            id: 98,
            name: 'Riven',
            image: 'leagueoflegends/RivenSquare.png',
            tags: ['F', 'human', 'noxus', 'fighter', 'top', 'melee', 'manaless'],
        },
        {
            id: 99,
            name: 'Rumble',
            image: 'leagueoflegends/RumbleSquare.png',
            tags: ['M', 'yordle', 'piltover', 'bandlecity', 'fighter', 'top', 'melee', 'heat'],
        },
        {
            id: 100,
            name: 'Ryze',
            image: 'leagueoflegends/RyzeSquare.png',
            tags: ['M', 'human', 'runeterra', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 101,
            name: 'Samira',
            image: 'leagueoflegends/SamiraSquare.png',
            tags: ['F', 'human', 'noxus', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 102,
            name: 'Sejuani',
            image: 'leagueoflegends/SejuaniSquare.png',
            tags: ['F', 'iceborne', 'freljord', 'tank', 'jungle', 'melee', 'mana'],
        },
        {
            id: 103,
            name: 'Senna',
            image: 'leagueoflegends/SennaSquare.png',
            tags: ['F', 'undead', 'demacia', 'shadow-isles', 'marksman', 'support', 'bot', 'ranged', 'mana'],
        },
        {
            id: 104,
            name: 'Seraphine',
            image: 'leagueoflegends/SeraphineSquare.png',
            tags: ['F', 'human', 'piltover', 'mage', 'support', 'mid', 'ranged', 'mana'],
        },
        {
            id: 105,
            name: 'Sett',
            image: 'leagueoflegends/SettSquare.png',
            tags: ['M', 'vastaya', 'ionia', 'noxus', 'fighter', 'top', 'melee', 'grit'],
        },
        {
            id: 106,
            name: 'Shaco',
            image: 'leagueoflegends/ShacoSquare.png',
            tags: ['M', 'demon', 'runeterra', 'assassin', 'jungle', 'melee', 'mana'],
        },
        {
            id: 107,
            name: 'Shen',
            image: 'leagueoflegends/ShenSquare.png',
            tags: ['M', 'human', 'ionia', 'tank', 'top', 'melee', 'energy'],
        },
        {
            id: 108,
            name: 'Shyvana',
            image: 'leagueoflegends/ShyvanaSquare.png',
            tags: ['F', 'dragon', 'demacia', 'fighter', 'jungle', 'melee', 'fury'],
        },
        {
            id: 109,
            name: 'Singed',
            image: 'leagueoflegends/SingedSquare.png',
            tags: ['M', 'human', 'zaun', 'tank', 'top', 'melee', 'mana'],
        },
        {
            id: 110,
            name: 'Sion',
            image: 'leagueoflegends/SionSquare.png',
            tags: ['M', 'undead', 'noxus', 'tank', 'top', 'melee', 'mana'],
        },
        {
            id: 111,
            name: 'Sivir',
            image: 'leagueoflegends/SivirSquare.png',
            tags: ['F', 'human', 'shurima', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 112,
            name: 'Skarner',
            image: 'leagueoflegends/SkarnerSquare.png',
            tags: ['M', 'brackern', 'ixtal', 'fighter', 'jungle', 'melee', 'mana'],
        },
        {
            id: 113,
            name: 'Sona',
            image: 'leagueoflegends/SonaSquare.png',
            tags: ['F', 'human', 'demacia', 'support', 'ranged', 'mana'],
        },
        {
            id: 114,
            name: 'Soraka',
            image: 'leagueoflegends/SorakaSquare.png',
            tags: ['F', 'celestial', 'targon', 'support', 'ranged', 'mana'],
        },
        {
            id: 115,
            name: 'Swain',
            image: 'leagueoflegends/SwainSquare.png',
            tags: ['M', 'human', 'noxus', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 116,
            name: 'Sylas',
            image: 'leagueoflegends/SylasSquare.png',
            tags: ['M', 'human', 'demacia', 'mage', 'mid', 'melee', 'mana'],
        },
        {
            id: 117,
            name: 'Syndra',
            image: 'leagueoflegends/SyndraSquare.png',
            tags: ['F', 'human', 'ionia', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 118,
            name: 'Tahm Kench',
            image: 'leagueoflegends/Tahm_KenchSquare.png',
            tags: ['M', 'demon', 'bilgewater', 'runeterra', 'tank', 'support', 'top', 'melee', 'mana'],
        },
        {
            id: 119,
            name: 'Taliyah',
            image: 'leagueoflegends/TaliyahSquare.png',
            tags: ['F', 'human', 'shurima', 'mage', 'mid', 'jungle', 'ranged', 'mana'],
        },
        {
            id: 120,
            name: 'Talon',
            image: 'leagueoflegends/TalonSquare.png',
            tags: ['M', 'human', 'noxus', 'assassin', 'mid', 'melee', 'mana'],
        },
        {
            id: 121,
            name: 'Taric',
            image: 'leagueoflegends/TaricSquare.png',
            tags: ['M', 'aspect', 'targon', 'demacia', 'tank', 'support', 'melee', 'mana'],
        },
        {
            id: 122,
            name: 'Teemo',
            image: 'leagueoflegends/TeemoSquare.png',
            tags: ['M', 'yordle', 'bandlecity', 'marksman', 'top', 'ranged', 'mana'],
        },
        {
            id: 123,
            name: 'Thresh',
            image: 'leagueoflegends/ThreshSquare.png',
            tags: ['M', 'undead', 'shadow-isles', 'support', 'ranged', 'mana'],
        },
        {
            id: 124,
            name: 'Tristana',
            image: 'leagueoflegends/TristanaSquare.png',
            tags: ['F', 'yordle', 'bandlecity', 'marksman', 'bot', 'mid', 'ranged', 'mana'],
        },
        {
            id: 125,
            name: 'Trundle',
            image: 'leagueoflegends/TrundleSquare.png',
            tags: ['M', 'troll', 'freljord', 'fighter', 'jungle', 'top', 'melee', 'mana'],
        },
        {
            id: 126,
            name: 'Tryndamere',
            image: 'leagueoflegends/TryndamereSquare.png',
            tags: ['M', 'human', 'freljord', 'fighter', 'top', 'melee', 'fury'],
        },
        {
            id: 127,
            name: 'Twisted Fate',
            image: 'leagueoflegends/Twisted_FateSquare.png',
            tags: ['M', 'human', 'bilgewater', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 128,
            name: 'Twitch',
            image: 'leagueoflegends/TwitchSquare.png',
            tags: ['M', 'rat', 'zaun', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 129,
            name: 'Udyr',
            image: 'leagueoflegends/UdyrSquare.png',
            tags: ['M', 'human', 'freljord', 'ionia', 'fighter', 'jungle', 'melee', 'mana'],
        },
        {
            id: 130,
            name: 'Urgot',
            image: 'leagueoflegends/UrgotSquare.png',
            tags: ['M', 'human', 'noxus', 'zaun', 'fighter', 'top', 'ranged', 'mana'],
        },
        {
            id: 131,
            name: 'Varus',
            image: 'leagueoflegends/VarusSquare.png',
            tags: ['M', 'darkin', 'noxus', 'shurima', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 132,
            name: 'Vayne',
            image: 'leagueoflegends/VayneSquare.png',
            tags: ['F', 'human', 'demacia', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 133,
            name: 'Veigar',
            image: 'leagueoflegends/VeigarSquare.png',
            tags: ['M', 'yordle', 'bandlecity', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 134,
            name: 'Vel Koz',
            image: 'leagueoflegends/VelKozSquare.png',
            tags: ['M', 'voidborn', 'void', 'runeterra', 'mage', 'support', 'mid', 'ranged', 'mana'],
        },
        {
            id: 157,
            name: 'Vex',
            image: 'leagueoflegends/VexSquare.webp',
            tags: ['F', 'yordle', 'bandlecity', 'shadow-isles', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 135,
            name: 'Vi',
            image: 'leagueoflegends/ViSquare.png',
            tags: ['F', 'human', 'piltover', 'fighter', 'jungle', 'melee', 'mana'],
        },
        {
            id: 136,
            name: 'Viego',
            image: 'leagueoflegends/ViegoSquare.png',
            tags: ['M', 'undead', 'shadow-isles', 'camavor', 'fighter', 'jungle', 'melee', 'mana'],
        },
        {
            id: 137,
            name: 'Viktor',
            image: 'leagueoflegends/ViktorSquare.png',
            tags: ['M', 'human', 'piltover', 'zaun', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 138,
            name: 'Vladimir',
            image: 'leagueoflegends/VladimirSquare.png',
            tags: ['M', 'human', 'noxus', 'mage', 'mid', 'ranged', 'health'],
        },
        {
            id: 139,
            name: 'Volibear',
            image: 'leagueoflegends/VolibearSquare.png',
            tags: ['M', 'god', 'freljord', 'tank', 'jungle', 'top', 'melee', 'fury'],
        },
        {
            id: 140,
            name: 'Warwick',
            image: 'leagueoflegends/WarwickSquare.png',
            tags: ['M', 'human', 'zaun', 'fighter', 'jungle', 'melee', 'manaless'],
        },
        {
            id: 141,
            name: 'Wukong',
            image: 'leagueoflegends/WukongSquare.png',
            tags: ['M', 'vastaya', 'ionia', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 142,
            name: 'Xayah',
            image: 'leagueoflegends/XayahSquare.png',
            tags: ['F', 'vastaya', 'ionia', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 143,
            name: 'Xerath',
            image: 'leagueoflegends/XerathSquare.png',
            tags: ['M', 'ascended', 'shurima', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 144,
            name: 'Xin Zhao',
            image: 'leagueoflegends/Xin_ZhaoSquare.png',
            tags: ['M', 'human', 'ionia', 'noxus', 'demacia', 'fighter', 'jungle', 'melee', 'mana'],
        },
        {
            id: 145,
            name: 'Yasuo',
            image: 'leagueoflegends/YasuoSquare.png',
            tags: ['M', 'human', 'ionia', 'fighter', 'mid', 'melee', 'flow'],
        },
        {
            id: 146,
            name: 'Yone',
            image: 'leagueoflegends/YoneSquare.png',
            tags: ['M', 'undead', 'ionia', 'fighter', 'mid', 'melee', 'manaless'],
        },
        {
            id: 147,
            name: 'Yorick',
            image: 'leagueoflegends/YorickSquare.png',
            tags: ['M', 'human', 'shadow-isles', 'fighter', 'top', 'melee', 'mana'],
        },
        {
            id: 148,
            name: 'Yuumi',
            image: 'leagueoflegends/YuumiSquare.png',
            tags: ['F', 'cat', 'bandlecity', 'support', 'ranged', 'mana'],
        },
        {
            id: 149,
            name: 'Zac',
            image: 'leagueoflegends/ZacSquare.png',
            tags: ['M', 'golem', 'zaun', 'tank', 'jungle', 'melee', 'health'],
        },
        {
            id: 150,
            name: 'Zed',
            image: 'leagueoflegends/ZedSquare.png',
            tags: ['M', 'human', 'ionia', 'assassin', 'mid', 'melee', 'energy'],
        },
        {
            id: 158,
            name: 'Zeri',
            image: 'leagueoflegends/ZeriSquare.jpg',
            tags: ['F', 'human', 'zaun', 'marksman', 'bot', 'ranged', 'mana'],
        },
        {
            id: 151,
            name: 'Ziggs',
            image: 'leagueoflegends/ZiggsSquare.png',
            tags: ['M', 'yordle', 'piltover', 'bandlecity', 'mage', 'mid', 'bot', 'ranged', 'mana'],
        },
        {
            id: 152,
            name: 'Zilean',
            image: 'leagueoflegends/ZileanSquare.png',
            tags: ['M', 'human', 'icathia', 'support', 'mid', 'ranged', 'mana'],
        },
        {
            id: 153,
            name: 'Zoe',
            image: 'leagueoflegends/ZoeSquare.png',
            tags: ['F', 'aspect', 'targon', 'mage', 'mid', 'ranged', 'mana'],
        },
        {
            id: 154,
            name: 'Zyra',
            image: 'leagueoflegends/ZyraSquare.png',
            tags: ['F', 'ixtal', 'mage', 'support', 'ranged', 'mana'],
        },
    ];

    charactersTemp.forEach(character => {
        character.isHidden = false;
    });

    return charactersTemp;
}
