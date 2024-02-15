# Guess Who - Vem där?
Ett spel där du ska gissa vilken karaktär som datorn har valt. Du får ställa frågor till datorn som den svarar ja eller nej på. När du tror att du vet vilken karaktär det är så kan du gissa. Om du gissar rätt så vinner du, annars fortsätter spelet. Försök att gissa rätt på så få frågor och gissningar som möjligt.

Den här versionen tar teman från filer i mapparna `characters` och `questions`. Filerna är i JSON-format. För att lägga till ett annat tema, lägg till nya filer på samma sätt som de befintliga. Du kan sedan lägga till lite kod i [StartScreen.vue](./src/components/StartScreen.vue) för att göra det nya temat tillgängligt i spelet. Denna github-branch kommer inte att uppdateras längre.

## Styleguide
* camelCase för variabler och funktioner
* PascalCase för filer
* 4 mellanslags indentering
* Semicolon om man vill
* ESModules
* Enkelfnuttar för strängar
* ''Grey'' stavas med e
