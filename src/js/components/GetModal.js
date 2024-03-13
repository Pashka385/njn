document.write('<script src="./src/js/components/products.js"></script>');
const ButtonsGet = document.querySelectorAll(".get__button");
const GetModalContent = document.querySelector(".modal1");

GetModalContent.innerHTML = `
    <div class='modal__content'>
        <button type='submit' class='GetModal__close'>&#215;</button>
        <div class='GetModal__container'>
            <div class='GetModal__title'>
                <p>Text Title Block</p>
            </div>
            <div class='GetModal__form'>
                <div class='Form__img'>
                    <div class='book__title'><p>Text Item</p></div>
                    <div class='book__img'><img src='./public/img/books.png'></div>
                </div>
                <form>
                    <input type='text' placeholder='Second Name'>
                    <input type='phone' placeholder='Number of phone'>
                    <input type='date'>
                    <input type='date'>
                </form>
            </div>
            <div class='GetModal__get'>
                <button class='GetModalGet__button'>Взять</button>
            </div>
        </div>
    </div>
`;

ButtonsGet.forEach((button) => {
    button.addEventListener("click", () => {
        GetModalContent.classList.add("active");
        document.body.style.overflow = 'hidden';
    });
});

const GetModal__close = document.querySelector(".GetModal__close");
GetModal__close.addEventListener('click', () => {
    GetModalContent.classList.remove("active");
    document.body.style.overflow = 'visible';
});


const GetModalButton = document.querySelectorAll(".GetModalGet__button");
GetModalButton.forEach((item)=>{
    item.addEventListener('click',()=>{
    item.classList.add("active");
})
})
