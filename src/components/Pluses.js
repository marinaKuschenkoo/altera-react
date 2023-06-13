import timePlus from "../img/time-plus.svg";
import teamPlus from "../img/team-plus.svg";
import moneyPlus from "../img/money-plus.png";
function Pluses() {
  return (
    <section className="pluses">
      <h2 className="headers">Наши преимущества</h2>
      <div className="pluses__items">
        <div className="pluses__plus">
          <img src={timePlus} alt="" className="pluses__img" />
          <h4 className="pluses__text">Экономия времени</h4>
        </div>
        <div className="pluses__plus">
          <img src={teamPlus} alt="" className="pluses__img" />
          <h4 className="pluses__text">
            Отсутствие необходимости создания штатных единиц
          </h4>
        </div>
        <div className="pluses__plus">
          <img src={moneyPlus} alt="" className="pluses__img" />
          <h4 className="pluses__text">Экономия средств до 60% за услуги</h4>
        </div>
      </div>
    </section>
  );
}
export default Pluses;
