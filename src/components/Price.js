function Price(props) {
  return (
    <section className="price">
      <h2 className="headers">Пакеты услуг</h2>
      <div className="price__items">
        <div className="price__item">
          <p className="price__header">«БАЗОВЫЙ»</p>
          <div className="price__block-pr-co">
            <ul className="price__pros">
              <li className="price__plus">Бухгалтерские услуги</li>
              <li className="price__plus">Юридические услуги</li>
              <li className="price__plus">Услуги по работе с кадрами</li>
            </ul>
            <ul className="price__cons">
              <li className="price__minus">SMM</li>
              <li className="price__minus">IT-услуги</li>
              <li className="price__minus">Обучение soft skills</li>
            </ul>
          </div>

          <a className="price__ask" onClick={props.onPriceClick}>Узнать стоимость</a>
        </div>
        <div className="price__item">
          <p className="price__header">«УДОБНЫЙ»</p>
          <div className="price__block-pr-co">
            <ul className="price__pros">
              <li className="price__plus">Бухгалтерские услуги</li>
              <li className="price__plus">Юридические услуги</li>
              <li className="price__plus">Услуги по работе с кадрами</li>
              <li className="price__plus">SMM</li>
            </ul>
            <ul className="price__cons">
              <li className="price__minus">IT-услуги</li>
              <li className="price__minus">Обучение soft skills</li>
            </ul>
          </div>
          <a className="price__ask" onClick={props.onPriceClick}>Узнать стоимость</a>
        </div>
        <div className="price__item">
          <p className="price__header">«БЕЗ ОГРАНИЧЕНИЙ»</p>
          <div className="price__block-pr-co">
            <ul className="price__pros">
              <li className="price__plus">Бухгалтерские услуги</li>
              <li className="price__plus">Юридические услуги</li>
              <li className="price__plus">Услуги по работе с кадрами</li>
              <li className="price__plus">SMM</li>
              <li className="price__plus">IT-услуги</li>
              <li className="price__plus">Обучение soft skills</li>
            </ul>
          </div>
          <a className="price__ask" onClick={props.onPriceClick}>Узнать стоимость</a>
        </div>
      </div>
    </section>
  );
}
export default Price;
