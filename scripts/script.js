const popupOpen = document.querySelector('.user-info__photo');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close')
console.log('popup', popupOpen);

const  open = () => popup.classList.add('popup_is-opened');
  
const  close = ()=> popup.classList.remove('popup_is-opened');    
  
popupOpen.addEventListener('click', open);
popupClose.addEventListener('click', close)
