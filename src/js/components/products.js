document.write('<script src="./src/js/components/filtration.js"></script>');
const Products = document.querySelector(".products");
let itemsHTML = "";

CATALOG.forEach((product) => {
    const itemName = product.name;
    const itemImg = product.img
    itemsHTML += `
        <div class='products__item'>
            <div class='products__img'>
                <img src='${itemImg}' alt='#'>
            </div>
            <div class='products__title'><p>${itemName}</p></div>
            <div class='products__get'>
                <button class='get__button'>Заказать</button>
            </div>
            <div class='products__dop'><p>Read me</p></div>
        </div>
    `;
});

Products.innerHTML += `
    <div class='products__container'>
        ${itemsHTML}
    </div>
`;