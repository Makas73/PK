const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal-btn');
const modalClose = document.querySelector('.modal-close');
const body = document.querySelector('body');

buttonModals.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.visibility = "visible";
        body.classList.add('noscroll');
    });
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if(!isModal) {
        modalWindow.style.visibility = 'hidden';
        body.classList.remove('noscroll');
    };
});

modalClose.addEventListener('click', () => {
    modalWindow.style.visibility = 'hidden';
    body.classList.remove('noscroll');
});

