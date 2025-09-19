// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.getElementById("hamburger"); // Obtém o ícone diretamente
    const navLinks = document.querySelector(".nav-links");

    hamburgerIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        // Verifica se o ícone é o de hambúrguer
        if (hamburgerIcon.classList.contains("fa-bars")) {
            hamburgerIcon.classList.remove("fa-bars");  // Remove o hambúrguer
            hamburgerIcon.classList.add("fa-x");        // Adiciona o "X"
        } else {
            hamburgerIcon.classList.remove("fa-x");    // Remove o "X"
            hamburgerIcon.classList.add("fa-bars");    // Adiciona o hambúrguer
        }
    });
});


document.getElementById('current-year').textContent = new Date().getFullYear();