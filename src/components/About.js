import aboutFirst from "../img/about-1.png";
import aboutSecond from "../img/about-2.png";
function About() {
  return (
    <section className="about" id="about">
      <h2 className="headers">О нас</h2>
      <div className="about__items">
        <div className="about__item">
          <div className="about__text">
            <h4 className="about__header">
              Наша цель - совершенствование вашего бизнеса
            </h4>
            <p className="about__whole-text">
              Группа компаний ALTERA ставит перед собой цель – совершенствуя
              бизнес, улучшать мир. Наши уникальные решения и услуги
              исключительного качества помогают укреплять доверие к бизнесу. Мы
              формируем лидеров отрасли, применяя инновационные подходы и
              технологии.
            </p>
          </div>
          <img src={aboutFirst} alt="" className="about__img" />
        </div>
        <div className="about__item">
          <div className="about__text">
            <h4 className="about__header">Почему мы?</h4>
            <p className="about__whole-text">
              ALTERA предоставляет услуги в области аудита, налогообложения,
              права, сопровождения бизнеса, сделок, технологий и консалтинга.
              Наша многопрофильная команда работают в соответствии с высокими
              стандартами качества и лучшими мировыми практиками. За более чем
              5-летний период работы в Южном федеральном округе мы объединили
              широкий круг специалистов, обладающих обширными знаниями и опытом
              реализации сложнейших проектов, в семи городах ЮФО: Краснодар,
              Симферополь, Севастополь, Ялта, Евпатория, Саки, Джанкой.
            </p>
          </div>
          <img src={aboutSecond} alt="" className="about__img" />
        </div>
      </div>
    </section>
  );
}
export default About;
