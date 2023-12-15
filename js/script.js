const icon = document.querySelector('.icon');
const search = document.querySelector('.header__search');
const clear = document.querySelector('.clear');

icon.onclick = function() {
    search.classList.toggle('active');
};

clear.onclick = function() {
    document.getElementById('mySearch').value = '';
};

// icon.addEventListener('click', () => {
//     search.classList.active('active');
// });

// clear.addEventListener('click', () => {
//     document.querySelector('#mySearch').value = '';
// });