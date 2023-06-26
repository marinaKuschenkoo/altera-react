import succeed from '../img/succeed.svg'
function PopupSubmit(props) {
  return (
    <section
      className={`popup popup__submit ${
        props.isOpen ? "popup_active" : ""
      }`}
    >
      <div className="services__item-popup">
        <button
          className="popup__exit-button popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <div className='succees__block'>
        <img src={succeed} className='succeed__img'/>
        <p className='succees__text'>Ваша заявка успешно отправлена!</p>
        </div>
      </div>
    </section>
  );
}
export default PopupSubmit;
