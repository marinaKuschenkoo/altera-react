import { data, headerCards } from "./Data.js";
import Header from "./Header";
import { useState } from "react";
function HeaderCases() {
  
  const closePhotoPopup = () => {
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [tempImgSrc, setTempImgSrc]= useState('')
  const getImg=(link)=>{
    setTempImgSrc(link);
    setIsOpen(true)
  }
  return (
    <>
      <Header />
      <section className="elements">
        {headerCards.map((card,index) => {
            return(
                <div className="element" key={index} onClick={()=>getImg(card.link)}>
                <img className="element__img" src={card.link} alt=""/>
              </div>
            )

        })}
      </section>
      <section
        className={`popup popup_full-image ${isOpen ? "popup_active" : ""}`}
      >
        <div className="services__item-popup popup__img">
          <button
            className="popup__exit-button popup__close"
            type="button"
            onClick={closePhotoPopup}
          ></button>
          <img src={tempImgSrc} className="popup__image" />
        </div>
      </section>
    </>
  );
}

export default HeaderCases;
