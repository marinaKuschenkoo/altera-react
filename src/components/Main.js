import line from "../img/line.svg";
function Main() {
  return (
    <>
      <section className="main__img" id="main">
        <h3 className="main__altera">Altera</h3>
      </section>
      <section className="main__text">
        <p className="main__about">
          ГРУППА КОМПАНИЙ ALTERA ПРЕДОСТАВЛЯЕТ ПОЛНЫЙ СПЕКТР АУДИТОРСКИХ И
          КОНСУЛЬТАЦИОННЫХ УСЛУГ, НЕОБХОДИМЫХ ДЛЯ ПОИСКА НОВЫХ РЕШЕНИЙ И
          РАЗВИТИЯ ВАШЕГО БИЗНЕСА.
        </p>
        <img src={line} alt="" className="main__line" />
      </section>
    </>
  );
}
export default Main;
