const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  currentFilters.search = searchInput.value;
  applyFilters();
});

function updateCounter(list) {
  const counter = document.getElementById("counter");
  counter.textContent = list.length + " film(s) affiché(s)";
}