import React from 'react';
// import PropTypes from 'prop-types';
import ReclandLogo from '../../resources/images/recland-logo.png';
import FacebookLogo from '../../resources/images/svg/Facebook.svg';
import TwitterLogo from '../../resources/images/svg/twitter.svg';
import LinkedInLogo from '../../resources/images/svg/linkedin.svg';
import InstagramLogo from '../../resources/images/svg/instagram.svg';
import UpIcon from '../../resources/images/svg/up.svg';

const Footer = () => {
  const goToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <footer className="wrapper footer-wrap">
      <div className="footer__main">
        <div className="footer__images">
          <img src={ReclandLogo} alt="footer logo" />
          <div className="footer__social__media">
            <img src={FacebookLogo} alt="facebook logo" />
            <img src={TwitterLogo} alt="twitter logo" />
            <img src={LinkedInLogo} alt="linkedin logo" />
            <img src={InstagramLogo} alt="instagram logo" />
          </div>
        </div>

        <div className="footer__addresses">
          <div className="footer__title">Địa chỉ</div>
          <p className="footer__content">Tòa nhà AC, 78 Duy Tân, Quận Cầu Giấy, Hà Nội</p>
        </div>

        <div className="footer__contacts">
          <div className="footer__title">Liên hệ</div>
          <div className="footer__content">0369 713 819</div>
          <div className="footer__content">luat.nguyen@recland.co</div>
        </div>

        <div className="footer__menus">
          <div className="footer__title">Menu</div>
          <div className="footer__content">Trang chủ</div>
          <div className="footer__content">Tìm kiếm công việc</div>
          <div className="footer__content">Sitemap</div>
        </div>

        <div className="footer__my__account">
          <div className="footer__title">Tài khoản của tôi</div>
          <div className="footer__content">Tổng quan</div>
          <div className="footer__content">Kho CV</div>
          <div className="footer__content">Thông tin cá nhân</div>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright © 2022 Recland.co
      </div>
      <div onClick={goToTop}>
        <img className="footer__go__to__top" src={UpIcon} alt="footer logo" />
      </div>
    </footer>
  );
};

Footer.propTypes = {

};

export default Footer;
