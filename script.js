// Lista de emojis
const emojis = ['🍆', '🍑', '🔥', '❤️', '👄'];

// Función para obtener un emoji aleatorio
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Función para completar el párrafo con 3 emojis aleatorios
document.getElementById('btn-complete').addEventListener('click', function() {
    let emojiString = '';
    for (let i = 0; i < 3; i++) {
        emojiString += getRandomEmoji(); // Añadir un emoji al azar
    }
    document.getElementById('p1').textContent = emojiString; // Mostrar los 3 emojis en el párrafo
});

// Event listener para el botón principal (resetea todo)
document.querySelector('.full-width').addEventListener('click', function() {
    document.getElementById('p1').textContent = '';
});
