function PopupPrice(props) {
  return (
    <section className={`popup popup__price ${props.isOpen ? "popup_active" : ""}`}>
      <div className="services__item-popup popup__item">
        <button
          className="popup__exit-button popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          action="mailto:kushenko_marina@mail.ru"
          method="POST"
          className="form form__price"
          name="f1"
        >
          <h4 className="popup__heading popup__heading_price">
            Оставьте контакты для обратной связи
          </h4>
          <input
            type="text"
            placeholder="Имя"
            className="inputs"
            name="name"
            required
          />
          <input
            type="text"
            className="inputs"
            placeholder="+7 (123) 456 78 90"
            name="email"
            required
          />
          <button className="form__submit" name="sab">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupPrice;
