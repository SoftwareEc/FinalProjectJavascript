function searchDestinations() {
  // Obtener el valor del input de búsqueda
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();

  // Contenedor donde se mostrarán los resultados
  const resultsContainer = document.getElementById('resultsContainer');
  const searchResultsSection = document.getElementById('searchResults');

  // Limpiar los resultados anteriores
  resultsContainer.innerHTML = '';

  // Mostrar la sección de resultados
  searchResultsSection.style.display = 'block';

  // Condiciones para búsqueda
  if (searchQuery.includes('beach')) {
    // Mostrar resultados para "playa"
    resultsContainer.innerHTML = `
      <h3>Playa de Cancún</h3>
      <p>Cancún es conocida por sus hermosas playas de aguas cristalinas y arenas blancas.</p>
      <img src="cancun1.webp" alt="Playa de Cancún">
      <img src="cancun2.webp" alt="Playa de Cancún">
    `;
  } else if (searchQuery.includes('temple')) {
    // Mostrar resultados para "templo"
    resultsContainer.innerHTML = `
      <h3>Templo de Angkor Wat</h3>
      <p>El Templo de Angkor Wat es uno de los templos más grandes y famosos del mundo, ubicado en Camboya.</p>
      <img src="angkor1.jpg" alt="Templo de Angkor Wat">
      <img src="angkor2.jpg" alt="Templo de Angkor Wat">
    `;
  } else if (searchQuery.includes('country')) {
    // Mostrar resultados para "ciudad"
    resultsContainer.innerHTML = `
      <h3>Roma, Italia</h3>
      <p>Roma es una de las ciudades más históricas del mundo, con monumentos como el Coliseo y la Fontana di Trevi.</p>
      <img src="italia2.jpg" alt="Roma">
      <img src="italia1.webp" alt="Roma">
    `;
  } else {
    // Si no se encuentra ninguna coincidencia
    resultsContainer.innerHTML = `<p>No se encontraron resultados para "${searchQuery}".</p>`;
  }
}
