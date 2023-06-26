import axios from 'axios';
import { useState } from "react";
import PopupSubmit from './PopupSubmit';
function Info(props) {
  const [IsSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }
  function handleClosePopup(evt){
    setIsSubmitPopupOpen(false)
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    
    let message=`<b>Заявка с сайта!</b>\n`;
    message+=`<b>Отправитель: </b> ${formValue.name}\n`;
    message+=`<b>Номер телефона: </b> ${formValue.phone}`

    const TOKEN='5916467708:AAE7nWgaapdwsHUnX7erYGV_FCx97OKxlyc';
    const CHAT_ID='-1001901034850';
    const URI_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    axios.post(URI_API,{
      chat_id:CHAT_ID,
      parse_mode:'html',
      text:message
    })
    .then((res)=>{
      setFormValue({
        name:'',
        phone:''
      })
      setIsSubmitPopupOpen(true)
    })
    .catch((err)=>{
      console.warn(err)
    })
  }

  return (
    <>
    <section className="info">
      <div className="info__container">
        <div className="info__place">
          <div className="info__text-container">
            <h3 className="info__header">хотите узнать больше информации?</h3>
            <p className="info__descr">
              Оставьте свои контактные данные и наш специалист свяжется с вами в
              ближайшее время, что бы проконсультировать
            </p>
          </div>
          <form id='tg' className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Имя" name="name" value={formValue.name} className="inputs" onChange={handleChange} required/>
            <input
              type="tel"
              className="inputs"
              name="phone"
              placeholder="+7 (123) 456 78 90"
              value={formValue.phone}
              onChange={handleChange}
              required
            />
            <button type="submit" className="form__submit">Отправить заявку</button>
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
