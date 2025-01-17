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
  if (searchQuery.includes('playa')) {
    // Mostrar resultados para "playa"
    resultsContainer.innerHTML = `
      <h3>Playa de Cancún</h3>
      <p>Cancún es conocida por sus hermosas playas de aguas cristalinas y arenas blancas.</p>
      <img src="cancun1.webp" alt="Playa de Cancún">
      <img src="cancun2.webp" alt="Playa de Cancún">
    `;
  } else if (searchQuery.includes('templo')) {
    // Mostrar resultados para "templo"
    resultsContainer.innerHTML = `
      <h3>Templo de Angkor Wat</h3>
      <p>El Templo de Angkor Wat es uno de los templos más grandes y famosos del mundo, ubicado en Camboya.</p>
      <img src="angkor1.jpg" alt="Templo de Angkor Wat">
      <img src="angkor2.jpg" alt="Templo de Angkor Wat">
    `;
  } else {
    // Si no se encuentra ninguna coincidencia
    resultsContainer.innerHTML = `<p>No se encontraron resultados para "${searchQuery}".</p>`;
  }
}
