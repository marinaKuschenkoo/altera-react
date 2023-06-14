import { YMaps, Map } from '@pbe/react-yandex-maps';
function Footer() {
  return (
    <footer className="footer" id="contact">
      <YMaps>
    <Map style={{width:'50%'}} defaultState={{ center: [44.95, 34.10], zoom: 12}} />
  </YMaps>
      <div className="footer__office">
        <h4 className="footer__header">Офисы</h4>
        <ul className="footer__list">
          <li className="footer__list-element">Джанкой</li>
          <li className="footer__list-element">Саки</li>
          <li className="footer__list-element">Евпатория</li>
          <li className="footer__list-element">Симферополь</li>
          <li className="footer__list-element">Краснодар</li>
          <li className="footer__list-element">Ялта</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
