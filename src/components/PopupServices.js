import buhg from "../img/buhgalter.svg";
import team from "../img/team.svg";
import smm from "../img/SMM.svg";
import it from "../img/IT.svg";
import education from "../img/education.svg";
import justice from "../img/justice.svg";
function PopupServices(props) {
  return (
    <>
      <section className={`popup popup__accounting ${props.isOpenAccounting ? "popup_active" : ""}`}>
        <div className="services__popup services__item-popup">
          <button
            className="popup__exit-button popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <img src={buhg} alt="" className="services__img popup__img" />
          <div className="popup__text">
            <h4 className="popup__heading">Бухгалтерия</h4>
            <p className="services__main-text">
              <li className="popup__list">
                Ведение бухгалтерского учета (Юридические лица, ИП)
              </li>
              <li className="popup__list">Отчет СЗВ-СТАЖ, включая ОДВ-1</li>
              <li className="popup__list">Отчет СЗВ-ТД</li>
              <li className="popup__list">
                Отчет нулевой по форме 4-ФСС (по травматизму)
              </li>
              <li className="popup__list">
                Подтверждение основного вида деятельности
              </li>
              <li className="popup__list">
                Расчет страховых взносов по пенсионному, социальному,
                медицинскому страхованию (РСВ)
              </li>
              <li className="popup__list">
                Налоговая декларация по налогу на добавленную стоимость (НДС),
                осуществляется при наличии ЭЦП и доступа в личный кабинет
                спецоператора по отправке отчетности
              </li>
              <li className="popup__list">
                Налоговая декларация по налогу на прибыль организаций
              </li>
              <li className="popup__list">
                Налоговая декларация по налогу, уплачиваемому в связи с
                применением упрощенной системы налогообложения (УСН)
              </li>
              <li className="popup__list">
                Книга учетов доходов и расходов организаций и ИП, применяющих
                упрощенную систему налогообложения (КУДИР)
              </li>
              <li className="popup__list">Декларация 3-НДФЛ</li>
              <li className="popup__list">
                Составление декларации 3-НДФЛ и заявление на возврат налога (при
                покупке или продаже недвижимости, при оплате за обучение,
                лечение и другие) за год
              </li>
              <li className="popup__list">
                Составление декларации 3-НДФЛ (корректирующей, без подачи в
                налоговую) за год
              </li>
              <li className="popup__list">
                Составление заявлений о переходе на различные системы
                налогообложения
              </li>
              <li className="popup__list">
                Консультирование по выбору системы налогообложения в Симферополе
                (в час.)
              </li>
            </p>
          </div>
        </div>
      </section>
      <section className={`popup popup__team  ${props.isOpenTeam ? "popup_active" : ""}`}>
        <div className="services__popup services__item-popup">
          <button
            className="popup__exit-button popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <img src={team} alt="" className="services__img popup__img" />
          <div className="popup__text">
            <h4 className="popup__heading">
              Работа с кадрами
            </h4>
            <p className="services__main-text">
              <li className="popup__list">
                Анализ кадрового потенциала организации
              </li>
              <li className="popup__list">Анализ потребностей организации</li>
              <li className="popup__list">
                Анализ уровня квалификации действующих сотрудников
              </li>
              <li className="popup__list">
                Оптимизация действующей структуры организации
              </li>
            </p>
          </div>
        </div>
      </section>
      <section className={`popup popup__smm  ${props.isOpenSmm ? "popup_active" : ""}`}>
        <div className="services__popup services__item-popup">
          <button
            className="popup__exit-button popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <img src={smm} alt="" className="services__img popup__img" />
          <div className="popup__text">
            <h4 className="popup__heading">SMM</h4>
            <p className="services__main-text">
              <li className="popup__list">Распаковка личности</li>
              <li className="popup__list">Контент-съёмка</li>
              <li className="popup__list">Контент-план</li>
              <li className="popup__list">Готовые тексты</li>
              <li className="popup__list">Упаковка аккаунта</li>
              <li className="popup__list">Запуск рекламных компаний</li>
              <li className="popup__list">Консультация</li>
              <li className="popup__list">Анализ Целевой Аудитории</li>
              <li className="popup__list">Анализ Конкурентов</li>
              <li className="popup__list">Распаковка личности</li>
              <li className="popup__list">
                Стратегия продвижения Вашего продукта
              </li>
              <li className="popup__list">Готовая воронка продаж</li>
              <li className="popup__list">
                Стратегии для иных социальный сетей
              </li>
              <li className="popup__list">Ведение постов и сторис</li>
            </p>
          </div>
        </div>
      </section>
      <section className={`popup popup__education  ${props.isOpenEducation ? "popup_active" : ""}`}>
        <div className="services__popup services__item-popup">
          <button
            className="popup__exit-button popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <img src={education} alt="" className="services__img popup__img" />
          <div className="popup__text">
            <h4 className="popup__heading">Образование</h4>
            <p className="services__main-text">
              <li className="popup__list">Обучение SMM</li>
              <li className="popup__list">
                Наставничество для предпринимателей вести свой бизнес в соц
                сетях
              </li>
              <li className="popup__list">Основы работы с ПК</li>
              <li className="popup__list">Основы маркетинга</li>
              <li className="popup__list">Основы работы с персоналом</li>
            </p>
          </div>
        </div>
      </section>
      <section className={`popup popup__it  ${props.isOpenIt ? "popup_active" : ""}`}>
        <div className="services__popup services__item-popup">
          <button
            className="popup__exit-button popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <img src={it} alt="" className="services__img popup__img" />
          <div className="popup__text">
            <h4 className="popup__heading">IT-услуги</h4>
            <p className="services__main-text">
              <li className="popup__list">Анализ деятельности </li>
              <li className="popup__list">
                Подбор, установка и настройка необходимого софта
              </li>
              <li className="popup__list">Создание и продвижение сайтов</li>
              <li className="popup__list">Автоматизация документооборота</li>
            </p>
          </div>
        </div>
      </section>
      <section className={`popup popup__justice  ${props.isOpenJustice ? "popup_active" : ""}`}>
        <div className="services__popup services__item-popup">
          <button
            className="popup__exit-button popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <img src={justice} alt="" className="services__img popup__img" />
          <div className="popup__text">
            <h4 className="popup__heading">
              Юридическая помощь
            </h4>
            <p className="services__main-text">
              <li className="popup__list">
                Получение консультаций (устных, письменных) по гражданскому,
                налоговому, коммерческому, корпоративному, трудовому, земельному
                законодательству;
              </li>
              <li className="popup__list">
                Проведение юридических экспертиз документов и предоставления
                кратких рекомендаций по возможным вариантам решения проблем;
              </li>
              <li className="popup__list">
                Разработка внутренней документации Клиента (положений,
                инструкций, трудовых договоров, приказов и т.д.);
              </li>
              <li className="popup__list">
                Разработка договоров гражданско-правового характера, составление
                жалоб, заявлений и других документов правового характера по
                различным правовым аспектам хозяйственной деятельности Клиента;
              </li>
              <li className="popup__list">
                Подборка законодательных и нормативно-методических документов по
                интересующим вопросам;
              </li>
              <li className="popup__list">
                Составление письменных юридических заключений.
              </li>
              <li className="popup__list">
                Составление договоров и контрактов, оптимизированных под
                интересы клиента, ведение претензионной работы;
              </li>
              <li className="popup__list">
                Составление и предъявление в интересах клиента исковых заявлений
                в Арбитражные суды и суды общей юрисдикции;
              </li>
              <li className="popup__list">
                Представительство в судах первой, второй инстанций (включая
                систему арбитражных судов);
              </li>
              <li className="popup__list">
                Подборка законодательных и нормативно-методических документов по
                интересующим вопросам; подготовка прочих документов: заявлений,
                жалоб, запросов, письменных ответов на вопросы органов
                исполнительной власти, прокуратуры, иных учреждений и
                организаций; участие в переговорах;
              </li>
              <li className="popup__list">
                Создание механизмов ответственности и обеспечения исполнения
                договорных обязательств;
              </li>
              <li className="popup__list">
                Внесение изменений в учредительные документы организации.
                Правовая экспертиза документов;
              </li>
              <li className="popup__list">
                Подборка законодательных и нормативно-методических документов по
                интересующим вопросам;
              </li>
              <li className="popup__list">Регистрация ИП</li>
              <li className="popup__list">Регистрация ООО</li>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default PopupServices;
