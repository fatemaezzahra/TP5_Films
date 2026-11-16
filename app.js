const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  currentFilters.search = searchInput.value;
  applyFilters();
});