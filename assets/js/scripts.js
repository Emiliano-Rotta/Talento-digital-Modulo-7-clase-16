const baseURL = 'https://rickandmortyapi.com/api/character/'
var nombre = document.getElementById('character-name')
var imagen = document.getElementById('character-image')
var estado = document.getElementById('character-status')

async function fetchCaracter() {
    try {
        const response = await fetch(`${baseURL}1`)
        const character = await response.json();
        nombre.textContent = character.name
        imagen.src = character.image
        estado.textContent = character.status
        console.log(character)

    } catch (error) {
        console.error('Error en el personaje:', error)
    }
    
}
fetchCaracter()