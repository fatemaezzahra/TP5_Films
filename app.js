document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    // Restaurer le thème choisi
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        themeButton.textContent = "🌙 Mode sombre";
    }

    // Changer de thème au clic
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙 Mode sombre";
        } else {
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️ Mode clair";
        }
    });
});