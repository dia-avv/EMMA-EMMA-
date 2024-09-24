function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

document.getElementById("burger-menu").addEventListener("click", toggleMenu)