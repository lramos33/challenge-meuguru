import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const signup = () => {
    navigate('/signup');
  };

  const users = () => {
    navigate('/users');
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <img className="meuguru__img" src="../../public/img/meuguru_logo.svg" alt="meuguru logo" />

        <div>
          <ul className="header__nav_list">
            <li onClick={signup}>
              <p className="header__page_name">Sign Up</p>
            </li>
            <li onClick={users}>
              <p className="header__page_name">Users</p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
