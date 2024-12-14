const baseURL = 'https://rickandmortyapi.com/api/character/'
var nombre = document.getElementById('character-name')
var imagen = document.getElementById('character-image')
var estado = document.getElementById('character-status')
var btn = document.getElementById('load-character')

async function fetchRandomCharacter() {
    try {
        randomID = Math.floor(Math.random() * 826) + 1; // ID aleatorio (1 a 826)
        const response = await fetch(`${baseURL}${randomID}`);
        const character = await response.json();
        console.log(randomID)
        // Actualizamos el DOM
        nombre.textContent = character.name;
        estado.textContent = `Status: ${character.status}`;
        imagen.src = character.image;
    } catch (error) {
        console.error('Error fetching random character:', error);
    }
}
fetchRandomCharacter()
// Evento para el botón
btn.addEventListener('click', fetchRandomCharacter);

