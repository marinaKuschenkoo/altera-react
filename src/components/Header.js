import logo from "../img/logo.png";
import phone from "../img/phone.svg";
import { Route, Routes } from "react-router-dom";
import {BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип АЛЬТЕРА" className="header__logo" />
      <nav className="header__menu">
        <Link to='/#main' className="header__menu-items" href="#main">
          Главная
        </Link>
        <Link to='/#feedback' className="header__menu-items" href="#feedback">
          Отзывы
        </Link>
        <Link to='/#contact' className="header__menu-items" href="#contact">
          Контакты
        </Link>
        <Link to='/cases' className="header__menu-items">
          Кейсы
        </Link>
        <Link to='/#about' className="header__menu-items" href="#about">
          О нас
        </Link>
      </nav>
      <ul className="header__nums">
        <img src={phone} alt="" className="header__icon" />
        <li className="header__num">+7 (978) 792 - 80 - 81</li>
      </ul>
    </header>
  );
}
export default Header;
