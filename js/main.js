const telElement = document.querySelector('#tel');
const select = document.querySelector('.choice');
const selectTitle = select.querySelector('.choice__title');
const selectLabels = select.querySelectorAll('.choice__label');
const pagesMenu = document.querySelector('.pages');
const buttonMenu = document.querySelector('.page-header__button');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const name = formData.get('name');
    const address = formData.get('address');
    const tel = formData.get('tel');
    const mail = formData.get('email');
    const comments = formData.get('comments');
    const pack = formData.get('packSelect');

    console.log(name, address, tel, mail, pack, comments)
});

telElement.addEventListener("click", function () {
    telElement.value = "+7"
});

selectTitle.addEventListener('click', () => {
    if ('active' === select.getAttribute('data-state')) {
        select.setAttribute('data-state', '');
    } else {
        select.setAttribute('data-state', 'active');
    }
});

for (const label of selectLabels) {
    label.addEventListener('click', (evt) => {
        const idEl = evt.target.htmlFor;
        const input = document.getElementById(idEl);
        input.checked = true;

        selectTitle.textContent = evt.target.textContent;
        select.setAttribute('data-state', '');
        selectTitle.style.color = "#000000";
    });
}

buttonMenu.addEventListener('click', function () {
    pagesMenu.classList.toggle('pages--opened')
    buttonMenu.classList.toggle('page-header__button--opened')
})