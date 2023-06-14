import logo from "../img/logo.png";
import phone from "../img/phone.svg";
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип АЛЬТЕРА" className="header__logo" />
      <nav className="header__menu">
        <a className="header__menu-items" href="#main">
          Главная
        </a>
        <a className="header__menu-items" href="#feedback">
          Отзывы
        </a>
        <a className="header__menu-items" href="#contact">
          Контакты
        </a>
        <a className="header__menu-items" href="cases.html" target="_self">
          Кейсы
        </a>
        <a className="header__menu-items" href="#about">
          О нас
        </a>
      </nav>
      <ul className="header__nums">
        <img src={phone} alt="" className="header__icon" />
        <li className="header__num">+7 (978) 792 - 80 - 81</li>
      </ul>
    </header>
  );
}
export default Header;
