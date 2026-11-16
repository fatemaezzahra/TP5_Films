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

const movies = [
  { title: "Inception", genre: "Action", year: 2010 },
  { title: "The Dark Knight", genre: "Action", year: 2008 },
  { title: "Mad Max: Fury Road", genre: "Action", year: 2015 },
  { title: "John Wick", genre: "Action", year: 2014 },
  { title: "Gladiator", genre: "Action", year: 2000 },
  { title: "Forrest Gump", genre: "Drame", year: 1994 },
  { title: "The Green Mile", genre: "Drame", year: 1999 },
  { title: "Titanic", genre: "Drame", year: 1997 },
  { title: "The Pursuit of Happyness", genre: "Drame", year: 2006 },
  { title: "Intouchables", genre: "Comédie", year: 2011 },
  { title: "The Mask", genre: "Comédie", year: 1994 },
  { title: "Home Alone", genre: "Comédie", year: 1990 },
  { title: "The Hangover", genre: "Comédie", year: 2009 }
];

// 1. Initialisation des filtres
const currentFilters = {
  search: "",
  genre: "all"
};

// 2. Fonction pour filtrer les films
function applyFilters() {

  const filteredMovies = movies.filter(function(movie) {

    const matchesSearch = movie.title
      .toLowerCase()
      .includes(currentFilters.search.toLowerCase());

    const matchesGenre =
      currentFilters.genre === "all" ||
      movie.genre === currentFilters.genre;

    return matchesSearch && matchesGenre;
  });

  // Afficher les films filtrés
  displayMovies(filteredMovies);

  // Mettre à jour le compteur
  updateCounter(filteredMovies);
}

// 3. Fonction pour afficher les films
function displayMovies(list) {

  const moviesContainer = document.getElementById("movies");

  moviesContainer.innerHTML = "";

  list.forEach(function(movie) {

    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <h3>${movie.title}</h3>
      <p>Genre : ${movie.genre}</p>
      <p>Année : ${movie.year}</p>
    `;

    moviesContainer.appendChild(card);
  });
}

// 4. Afficher tous les films au chargement
applyFilters();