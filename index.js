const acClick=document.querySelector('.services__item-accounting');
const teamClick=document.querySelector('.services__item-team');
const smmClick=document.querySelector('.services__item-smm');
const itClick=document.querySelector('.services__item-it');
const eduClick=document.querySelector('.services__item-education');
const justClick=document.querySelector('.services__item-justice');

const acPopup=document.querySelector('.popup__accounting');
const teamPopup=document.querySelector('.popup__team');
const smmPopup=document.querySelector('.popup__smm');
const itPopup=document.querySelector('.popup__it');
const eduPopup=document.querySelector('.popup__education');
const justPopup=document.querySelector('.popup__justice');
const popup=document.querySelector('.popup');
const popups=Array.from(document.querySelectorAll('.popup'));
const closeButtons=Array.from(document.querySelectorAll('.popup__exit-button'));
const pricePopup=document.querySelector('.popup__price')
const priceButtons=Array.from(document.querySelectorAll('.price__ask'));

function open(popup){
    popup.classList.add('popup_active');
}
function close(popup){
    popup.classList.remove('popup_active');
}

acClick.addEventListener('click', () => {open(acPopup)});
teamClick.addEventListener('click', () => {open(teamPopup)})
smmClick.addEventListener('click', () => {open(smmPopup)})
itClick.addEventListener('click', () => {open(itPopup)})
eduClick.addEventListener('click', () => {open(eduPopup)})
justClick.addEventListener('click', () => {open(justPopup)})

closeButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        close(btn.closest('.popup'))
    })
})

priceButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        open(pricePopup)
    })
})

