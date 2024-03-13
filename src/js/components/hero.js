const Hero = document.querySelector(".hero");
Hero.innerHTML = `
    <div class='hero__container'>
        <div class='hero__text'>
            <h1>Начни изучать</h1>
            <span>Возьми книгу с полки сейчас</span>
            <button class='getbook'>Взять книгу</button>
        </div>
        <div class='HeroArow'>
            <img src='./public/icons/arrow-right.png' alt='HeroArrow'>
        </div>
        <div class='hero__img'>
            <img src='./public/img/books.png' alt='HeroBooks'>
        </div>
    <div>
`;

const HeroArr = document.querySelector(".HeroArow");
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    HeroArr.classList.remove("active")
    HeroArr.style.left = value * 1 + "px";
});
