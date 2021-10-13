const hamburgerMenu = document.getElementById('dropdown');

const dropdownMenu = document.getElementById('menu');

const viewport = window.matchMedia("(max-width: 767px)");

const showMenu = (element) => {
    element.style.display === 'block' ? element.style.display = 'none' : element.style.display = 'block';
};

hamburgerMenu.addEventListener('click', function() {
    showMenu(dropdownMenu)
});

