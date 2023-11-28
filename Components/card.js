let row = localStorage.getItem('item-page')
let item_page = JSON.parse(row);
console.log(item_page)

const itemCard = document.querySelector('.good__item')
const direction = document.querySelector('.section__direct')
console.log(itemCard);

function makeCard(good) {
    const {id, type, model, price, image} = good
    itemCard.dataset.id = id
    itemCard.innerHTML = `
        <div class="info__good-image">
            <div class="main__view"><img src="${image}" alt="#"></div>
            <div class="other__view">
                <img src="${image}" alt="#">
                <img src="${image}" alt="#">
                <img src="${image}" alt="#">
            </div>
        </div>
        <div class="info__good">
            <div class="shell">
                <div class="info__good-model">${type} ${model}</div>
                <div class="info__good-type">Категория: ${type} Бренд: <span>${model}</span></div>
                <div class="info__good-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.
                Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. 
                Et nulla sit convallis orci est, fames sit luctus lacus. 
                </div>
                <div class="info__good-price">${price}</div>
                <div class="info__good-button">
                <button class="btn__buy">купить</button>
                <button class="btn-basket">добавить в корзину</button>
            </div>
            </div>
        </div>
    `

    direction.innerHTML =  `
        <span>Главная</span> / <span>Каталог</span> / <span>Категория</span> / <span>${type} ${model}</span>
    `
}

makeCard(item_page)