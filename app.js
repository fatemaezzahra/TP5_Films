const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  currentFilters.search = searchInput.value;
  applyFilters();
});

function updateCounter(list) {
  const counter = document.getElementById("counter");
  counter.textContent = list.length + " film(s) affiché(s)";
}


const genreSelect = document.getElementById("genre-filter");

genreSelect.addEventListener("change", function () {
  currentFilters.genre = genreSelect.value;
  applyFilters();
});