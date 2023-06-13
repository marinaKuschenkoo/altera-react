import buhg from "../img/buhgalter.svg";
import team from "../img/team.svg";
import smm from "../img/SMM.svg";
import it from "../img/IT.svg";
import education from "../img/education.svg";
import justice from "../img/justice.svg";
function Services(props) {
  return (
    <section className="services">
      <h2 className="headers">Наши услуги</h2>
      <div className="services__items">
        <div onClick={props.onAccountingClick} className="services__item services__item-hover services__item-accounting">
          <img src={buhg} alt="" className="services__img" />
          <div className="services__text">
            <h4 className="services__heading">Бухгалтерия</h4>
            <p className="services__main-text">
              Наши бухгалтерские и сопутствующие услуги — это высокое качество,
              строгая профессиональная этика, глубокие профильные знания и
              исключительный уровень обслуживания.
            </p>
          </div>
        </div>
        <div onClick={props.onTeamClick} className="services__item services__item-hover services__item-team">
          <img src={team} alt="" className="services__img" />
          <div className="services__text">
            <h4 className="services__heading">Работа с кадрами</h4>
            <p className="services__main-text">
              Комплексная поддержка в подборе персонала и разработка
              индивидуальной стратегии работы со штатом.
            </p>
          </div>
        </div>
        <div onClick={props.onSmmClick} className="services__item services__item-hover services__item-smm">
          <img src={smm} alt="" className="services__img" />
          <div className="services__text">
            <h4 className="services__heading">SMM</h4>
            <p className="services__main-text">
              Какими бы ни были цели наших клиентов — создание облика или его
              реструктуризация, изучение возможностей выхода на новые рынки или
              анализ целевых групп, — мы поможем их осуществить.
            </p>
          </div>
        </div>
        <div onClick={props.onItClick} className="services__item services__item-hover services__item-it">
          <img src={it} alt="" className="services__img" />
          <div className="services__text">
            <h4 className="services__heading">IT-услуги</h4>
            <p className="services__main-text">
              Мы используем инновационные подходы в интернет-маркетинге, а
              знания и богатый опыт позволяют нам это делать высококлассно.
            </p>
          </div>
        </div>
        <div onClick={props.onEducationClick} className="services__item services__item-hover services__item-education">
          <img src={education} alt="" className="services__img" />
          <div className="services__text">
            <h4 className="services__heading">Образование</h4>
            <p className="services__main-text">
              Мы помогаем нашим клиентам оптимизировать бизнес, управлять
              рисками и сокращать затраты, внедрять инновации и защищать активы.
            </p>
          </div>
        </div>
        <div onClick={props.onJusticeClick} className="services__item services__item-hover services__item-justice">
          <img src={justice} alt="" className="services__img" />
          <div className="services__text">
            <h4 className="services__heading">Юридическая помощь</h4>
            <p className="services__main-text">
              Наши юридические специалисты консультируют по всем аспектам права,
              чтобы помочь бизнесу преуспеть в эпоху стремительных перемен.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
