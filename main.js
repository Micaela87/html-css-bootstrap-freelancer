const hamburgerMenu = document.getElementById('dropdown');

const dropdownMenu = document.getElementById('hidden-menu');

const showMenu = (element) => {
    element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none';
};

hamburgerMenu.addEventListener('click', function() {
    showMenu(dropdownMenu)
});