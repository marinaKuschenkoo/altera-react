function Info() {
  return (
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
          <form action="mail.php" method="POST" className="form">
            <input type="text" placeholder="Имя" name="user_name" className="inputs" />
            <input
              type="text"
              className="inputs"
              name="user_phone"
              placeholder="+7 (123) 456 78 90"
            />
            <button type="submit" className="form__submit">Отправить заявку</button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Info;
