const goods = [
    {id: 1, type: 'Подвеска', model: "Dolce & Gabanna", price: "175 000", image: '../Catalog/images/catalog/dolce-gabana.jpg'},
    {id: 2, type: 'Подвеска', model: "Dolce & Gabanna", price: "75 000", image: '../Catalog/images/catalog/dolce-gabana.jpg'},
    {id: 3, type: 'Подвеска', model: "Dolce & Gabanna", price: "175 000", image: '../Catalog/images/catalog/dolce-gabana.jpg'},
]

const simItem = document.querySelector('.sim__item');

goods.forEach(good => {
    let item = document.createElement('div')
    item.className = 'item-good'
    item.innerHTML =  `
            <div class="item__image" data-number="${good.id}"><img src="${good.image}" alt=""></div>
            <div class="item__kind">${good.type}</div>
            <div class="item__title" data-number="${good.id}">${good.model}</div>
            <form action="../Components/index.html" target="_blank">
                <button class="item__price" data-number="${good.id}">${good.price}₽</button>
            </form>
    `

    simItem.insertAdjacentElement("beforeend", item)
})

