var hamburguer = document.querySelector('.hamburguer');
hamburguer.onclick = function() {
    navLink = document.querySelector('.nav_links');
    navLink.classList.toggle("active")
    console.log('clicou')
}