const create = document.getElementById('create');
const clear = document.getElementById('clear');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const imgUrl = document.getElementById('imgUrl');
const cardContainer = document.getElementById('cardContainer');

create.addEventListener('click', () => {
    if (name.value != "" && phone.value != "" && imgUrl.value != "" && !cardContainer.hasChildNodes()) {
        const card = new Card(name.value, phone.value, imgUrl.value);
        cardContainer.appendChild(card.el);
        setTimeout(() => {
            cardContainer.firstChild.classList.add('card--on');
        }, 10);
        name.value = "";
        phone.value = "";
        imgUrl.value = "";
    }
});

clear.addEventListener('click', () => {
    if (cardContainer.hasChildNodes()) {
        document.getElementById('card').classList.remove('card--on');
        setTimeout(() => {
            cardContainer.removeChild(document.getElementById('card'));
        }, 500);
    }
})


function Element(tagName, className) {
    const el = document.createElement(tagName);
    el.className = className;
    return el;
}

function Card(name, phone, imgUrl) {
    this.el = Element('div', 'card');

    this.el.setAttribute('id', 'card');

    const cardImg = Element('img', 'card__img');
    const cardContent = Element('div', 'card__content');
    const cardName = Element('h1', 'card__name');
    const cardPhone = Element('p', 'card__phone');

    cardImg.src = imgUrl;
    cardName.innerHTML = name;
    cardPhone.innerHTML = phone;

    cardContent.appendChild(cardName);
    cardContent.appendChild(cardPhone);

    this.el.appendChild(cardImg);
    this.el.appendChild(cardContent);

}



