let menuBtn = document.getElementById('menu-btn');
let linkBox = document.querySelector('nav > .links');
menuBtn.addEventListener('change', () => {
    if (menuBtn.checked) {
        linkBox.classList.add('show');
    } else {
        linkBox.classList.remove('show');
        // Do something when unchecked
    }
});