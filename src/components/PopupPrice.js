import { useForm } from "react-hook-form";
import { useState } from "react";
import PopupSubmit from "./PopupSubmit";
import axios from "axios";
function PopupPrice(props) {
  const [formValue, setFormValue] = useState();
  const [IsSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    formState,
  } = useForm({ mode: "onChange" });

  const name = watch("name");
  const phone = watch("phone");

  function handleClosePopup(evt) {
    setIsSubmitPopupOpen(false);
  }
  function onSubmitt(data) {
    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${name}\n`;
    message += `<b>Номер телефона: </b> ${phone}`;

    const TOKEN = "5916467708:AAE7nWgaapdwsHUnX7erYGV_FCx97OKxlyc";
    const CHAT_ID = "-1001901034850";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        reset();
        setIsSubmitPopupOpen(true);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  return (
    <>
      <section
        className={`popup popup__price ${props.isOpen ? "popup_active" : ""}`}
      >
        <div className="services__item-popup popup__item">
          <button
            className="popup__exit-button popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <form
            className="form form__price"
            name="f1"
            onSubmit={handleSubmit(onSubmitt)}
          >
            <h4 className="popup__heading popup__heading_price">
              Оставьте контакты для обратной связи
            </h4>
            <input
              type="text"
              placeholder="Имя"
              className="inputs"
              name="name"
              {...register("name", {
                required: "Поле Имя не заполнено",
              })}
            />
            <p className="inputs__error">{errors.name?.message}</p>
            <input
              type="text"
              className="inputs"
              placeholder="+7 (123) 456 78 90"
              name="email"
              {...register("phone", {
                required: "Поле номер телефона не заполнено",
              })}
            />
            <p className="inputs__error">{errors.phone?.message}</p>
            <button className="form__submit" name="sab">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>
      <PopupSubmit
        isOpen={IsSubmitPopupOpen}
        onClose={handleClosePopup}
      ></PopupSubmit>
    </>
  );
}
export default PopupPrice;
