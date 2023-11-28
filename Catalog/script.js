let item__page = {};
const catalog = document.querySelector('.columns__container');

// Функция для выполнения запроса Fetch
async function fetchData() {
  try {
    const response = await fetch('./data.json'); // Укажите путь к вашему файлу с данными
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка запроса:', error);
    throw error; // Передать ошибку для дальнейшей обработки, если нужно
  }
}

// Запрос данных и обработка после получения
fetchData().then(goods => {
  // Добавьте данные в переменную originalGoods
  const originalGoods = [...goods];

  const [lastElement] = goods.splice(-1);
  const lastIndexGoods = originalGoods.indexOf(lastElement);
  console.log(lastIndexGoods);

  originalGoods.forEach((good, index) => {
    let hr = document.createElement('hr');
    hr.className = 'catalog__separator';
    let item = document.createElement('div');
    item.className = 'columns__item';
    item.dataset.number = good.id;

    if (good.id % 3 !== 0 || index === lastIndexGoods) {
      item.innerHTML = `
          <div class="item__image" data-number="${good.id}"><img src="${good.image}" alt=""></div>
          <div class="item__kind">${good.type}</div>
          <div class="item__title" data-number="${good.id}">${good.model}</div>
          <form action="../Components/index.html" target="_blank">
              <button class="item__price" data-number="${good.id}">${good.price}₽</button>
          </form>
      `;
      catalog.insertAdjacentElement("beforeend", item);
    } else if (good.id % 3 === 0 || index !== lastIndexGoods) {
      item.innerHTML = `
          <div class="item__image" data-number="${good.id}"><img src="${good.image}" alt=""></div>
          <div class="item__kind">${good.type}</div>
          <div class="item__title" data-number="${good.id}">${good.model}</div>
          <form action="../Components/index.html" target="_blank">
              <button class="item__price" data-number="${good.id}">${good.price}₽</button>
          </form>
      `;
      catalog.insertAdjacentElement("beforeend", item);

      catalog.insertAdjacentElement("beforeend", hr);
    }
  });
});

// Остальной код остается без изменений
window.addEventListener('click', async (event) => {
  const clickedNumber = event.target.dataset.number;

  if (clickedNumber) {
    const item = event.target.closest('.columns__item');
    console.log(item);
    // Добавьте логику для обработки клика
    item__page = {
      id: item.dataset.number,
      type: item.querySelector('.item__kind').textContent,
      model: item.querySelector('.item__title').textContent,
      price: item.querySelector('.item__price').textContent,
      image: item.querySelector('.item__image img').src
    };

    console.log(item__page);
    localStorage.setItem('item-page', JSON.stringify(item__page))
  }
});
