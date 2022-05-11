import React from 'react';
import Header from '../components/Header';

function NotFound() {
  return (
    <div className="page_content">
      <Header />
      <img className="notfound__img" src="../../public/img/404.svg" alt="not found" />
    </div>
  );
}

export default NotFound;
