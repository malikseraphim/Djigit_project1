const importBrands = [
    {id: 1, image: 'images/header_brand.png', href: 'https://www.sarkissian.ru/fine/'},
    {id: 2, image: 'images/header_brand.png', href: 'https://www.sarkissian.ru/fine/'},
    {id: 3, image: 'images/header_brand.png', href: 'https://www.sarkissian.ru/fine/'},
    {id: 4, image: 'images/header_brand.png', href: 'https://www.sarkissian.ru/fine/'},
    {id: 5, image: 'images/header_brand.png', href: 'https://www.sarkissian.ru/fine/'},
    {id: 6, image: 'images/header_brand.png', href: 'https://www.sarkissian.ru/fine/'}
]


const brands_columns = document.querySelector('.brands_container')

importBrands.forEach(brand => {
    let item = document.createElement('div')
    item.className = 'brand__item'
    item.innerHTML = `
        <a class="brand__link" href="${brand.href}">
            <img src="${brand.image}" alt="#">
        </a>
    `

    brands_columns.insertAdjacentElement('beforeend', item)
})

