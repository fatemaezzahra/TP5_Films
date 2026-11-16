// ==========================================================
// DONNÉES (ne pas modifier)
// ==========================================================
const movies = [
  { title: "Inception", genre: "Action", year: 2010 },
  { title: "The Dark Knight", genre: "Action", year: 2008 },
  { title: "Forrest Gump", genre: "Drame", year: 1994 },
  { title: "The Green Mile", genre: "Drame", year: 1999 },
  { title: "Intouchables", genre: "Comédie", year: 2011 },
  { title: "The Mask", genre: "Comédie", year: 1994 }
];

// État partagé des filtres (ne pas modifier)
const currentFilters = {
  search: "",
  genre: "all"
};

// ==========================================================
// AFFICHAGE (ne pas modifier)
// ==========================================================
function displayMovies(list) {
  const container = document.getElementById("movies");
  container.innerHTML = "";

  list.forEach(function (movie) {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML =
      "<h3>" + movie.title + "</h3>" +
      "<p>" + movie.genre + " - " + movie.year + "</p>";
    container.appendChild(card);
  });

  // Appelle le compteur s'il existe (défini par le membre C)
  if (typeof updateCounter === "function") {
    updateCounter(list);
  }
}

// Applique la recherche ET le filtre en même temps (ne pas modifier)
function applyFilters() {
  const result = movies.filter(function (movie) {
    const matchSearch = movie.title
      .toLowerCase()
      .includes(currentFilters.search.toLowerCase());
    const matchGenre =
      currentFilters.genre === "all" || movie.genre === currentFilters.genre;
    return matchSearch && matchGenre;
  });

  displayMovies(result);
}

// ==========================================================
// MEMBRE A : RECHERCHE PAR TITRE
// (écrire uniquement sous cette ligne, avant la ligne suivante)
// ==========================================================



// ----------------------------------------------------------
// Fin zone A
// ----------------------------------------------------------

const ZONE_SEPARATOR_1 = "ne pas supprimer : sépare les zones";

// ==========================================================
// MEMBRE B : FILTRE PAR GENRE
// (écrire uniquement sous cette ligne, avant la ligne suivante)
// ==========================================================



// ----------------------------------------------------------
// Fin zone B
// ----------------------------------------------------------

const ZONE_SEPARATOR_2 = "ne pas supprimer : sépare les zones";

// ==========================================================
// MEMBRE C : COMPTEUR DE FILMS
// (écrire uniquement sous cette ligne, avant la ligne suivante)
// ==========================================================



// ----------------------------------------------------------
// Fin zone C
// ----------------------------------------------------------

const ZONE_SEPARATOR_3 = "ne pas supprimer : sépare les zones";

// ==========================================================
// DÉMARRAGE (ne pas modifier)
// ==========================================================
document.addEventListener("DOMContentLoaded", applyFilters);