const About = document.querySelector('.about');
About.innerHTML = `
    <div class='about__container'>
        <div class='about__item'>
            <div class='about__logo'>
                <i class="fa-solid fa-earth-asia"></i>
            </div>
            <div class='about__titleitem'><p>Скорость</p></div>
            <div class='about__textitem'>
                <p>Вы сможете всегда вовремя и в срок дать нуждающемуся человека книгу нужного издания.</p>
            </div>
        </div>
        <div class='about__item'>
            <div class='about__logo'>
                <i class="fa-solid fa-earth-asia"></i>
            </div>
            <div class='about__titleitem'><p>Скорость</p></div>
            <div class='about__textitem'>
                <p>Вы сможете всегда вовремя и в срок дать нуждающемуся человека книгу нужного издания.</p>
            </div>
        </div>
        <div class='about__item'>
            <div class='about__logo'>
                <i class="fa-solid fa-earth-asia"></i>
            </div>
            <div class='about__titleitem'><p>Скорость</p></div>
            <div class='about__textitem'>
                <p>Вы сможете всегда вовремя и в срок дать нуждающемуся человека книгу нужного издания.</p>
            </div>
        </div>      
    </div>
`;
let cards = document.querySelectorAll('.about__item');
VanillaTilt.init(cards, {
    max: 15,  // Максимальный угол поворота карточки
    glare: true,  // Включаем эффект блика
    'max-glare': 0.5,  // Регулируем интенсивность блика
});

const AboutTitle = document.querySelector(".about__title");
AboutTitle.innerHTML = `<h1>Наши <span>преимущетсва</span></h1>`;