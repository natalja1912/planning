import { Link } from "react-router-dom";
import * as Image from '../../icons';
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <nav className="breadscrumb">
        <ul className="breadscrumb__list">
          <li className="breadscrumb__item"><Link className="breadscrumb__link" to="/">Главная</Link></li>
          <p className="breadscrumb__divider">&mdash;</p>
          <li className="breadscrumb__item"><Link className="breadscrumb__link" to="/">Планирование</Link></li>
        </ul>
      </nav>
      <div className='header__text-group'>
        <div className='header__icon'><Image.Planning /></div>
        <h1 className='header__heading'>Планирование</h1>
      </div>
      <button className='header__plan-group'>
        <Image.Plus />
        <button className="header__plan-btn">Запланировать</button>
      </button>
    </div>
  );
}

export default Header;
