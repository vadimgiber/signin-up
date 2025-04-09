async function fetchCharacters() { const endpoints = [ "https://rickandmortyapi.com/api/character/1", "https://rickandmortyapi.com/api/character/2", "https://rickandmortyapi.com/api/character/1,183", "https://rickandmortyapi.com/api/character/episode", "https://rickandmortyapi.com/api/character/location" ];

    try {
        const responses = await Promise.all(endpoints.map(url => fetch(url)));
        const characters = await Promise.all(responses.map(res => res.json()));
        
        characters.forEach((char, index) => {
            console.log(`Персонаж ${index + 1}: ${char.name} (${char.status}, ${char.species}, ${char.episode})`);
        });
    } catch (error) {
        console.error("Помилка отримання даних:", error);
    }
    
    }
    
    fetchCharacters();