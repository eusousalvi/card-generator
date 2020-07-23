const form = document.getElementById('form');
const create = document.getElementById('create');
const clear = document.getElementById('clear');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const imgUrl = document.getElementById('imgUrl');
const cardContainer = document.getElementById('cardContainer');

// ***** ADD CARD *****
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!cardContainer.hasChildNodes()) {
        const card = createCard(e.target.name.value, e.target.phone.value, e.target.imgUrl.value);
        cardContainer.appendChild(card);

        setTimeout(() => {
            document.getElementById('card').classList.add('card--on');
        }, 10);

    }
});

// ***** CLEAR CARD *****
clear.addEventListener('click', () => {
    if (cardContainer.hasChildNodes()) {
        document.getElementById('card').classList.remove('card--on');
        setTimeout(() => {
            cardContainer.removeChild(document.getElementById('card'));
        }, 500);
    }
});

// ***** MASK FOR PHONE NUMBER *****
phone.addEventListener('keydown', (e) => {
    if (e.keyCode != 46 && e.keyCode != 8) {
        const len = phone.value.length;
        let dig = '';

        if (len === 2) {
            dig = '(';
            dig += phone.value + ')';
            phone.value = dig;
        }

        if (len === 8) {
            dig += phone.value + '-';
            phone.value = dig;
        }
    }
});

// ***** ELEMENT CREATOR *****
function element(tagName, className) {
    const el = document.createElement(tagName);
    el.className = className;
    return el;
}

// ***** CARD CREATOR *****
function createCard(name, phone, imgUrl) {
    let el = element('div', 'card');

    el.setAttribute('id', 'card');

    const cardImg = element('img', 'card__img');
    const cardContent = element('div', 'card__content');
    const cardName = element('h1', 'card__name');
    const cardPhone = element('p', 'card__phone');

    cardImg.src = imgUrl;
    cardName.innerHTML = name;
    cardPhone.innerHTML = phone;

    cardContent.appendChild(cardName);
    cardContent.appendChild(cardPhone);

    el.appendChild(cardImg);
    el.appendChild(cardContent);

    return el;
}



