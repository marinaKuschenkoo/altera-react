import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PopupSubmit from "./PopupSubmit";
import { getValue } from "@testing-library/user-event/dist/utils";
function Info(props) {
  const [IsSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [formValue, setFormValue] = useState();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
    formState,
  } = useForm({ mode: "onChange" });
  function handleClosePopup(evt) {
    setIsSubmitPopupOpen(false);
  }
  const name = watch("name");
  const phone = watch("phone");

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
      <section className="info">
        <div className="info__container">
          <div className="info__place">
            <div className="info__text-container">
              <h3 className="info__header">хотите узнать больше информации?</h3>
              <p className="info__descr">
                Оставьте свои контактные данные и наш специалист свяжется с вами
                в ближайшее время, что бы проконсультировать
              </p>
            </div>
            <form id="tg" className="form" onSubmit={handleSubmit(onSubmitt)}>
              <input
                type="text"
                placeholder="Имя"
                className="inputs"
                {...register("name", {
                  required: "Поле Имя не заполнено",
                })}
              />
              <p className="inputs__error">{errors.name?.message}</p>
              <input
                type="tel"
                className="inputs"
                placeholder="+7 (123) 456 78 90"
                {...register("phone", {
                  required: "Поле номер телефона не заполнено",
                })}
              />
              <p className="inputs__error">{errors.phone?.message}</p>
              <button type="submit" className="form__submit">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>
      <PopupSubmit
        isOpen={IsSubmitPopupOpen}
        onClose={handleClosePopup}
      ></PopupSubmit>
    </>
  );
}
export default Info;
