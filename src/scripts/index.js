const hamburger = document.getElementById('hamburger-menu')
const menu = document.querySelectorAll('li')

hamburger.addEventListener('click', () => {
    menu.forEach(element => {
        element.classList.toggle('display')
    });
})