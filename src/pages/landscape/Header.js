import React from 'react';
// import PropTypes from 'prop-types';
import ReclandLogo from '../../resources/images/recland-logo.png';

const Header = () => {
  return (
    <header className="wrapper header">
      <div className="header-left">
        <img src={ReclandLogo} alt="recland logo" />
      </div>
      <div className="header-right">
        <span className="header-title">Tất Cả Các Job</span>
        <div className="btn btn-outlined">Đăng ký</div>
        <div className="btn btn-contained">Đăng Nhập</div>
      </div>
    </header>
  );
};

Header.propTypes = {

};

export default Header;
