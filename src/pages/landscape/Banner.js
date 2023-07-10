import React from 'react';
// import PropTypes from 'prop-types';

import BannerImage from '../../resources/images/recland-banner.png';

const Banner = () => {
  return (
    <div className="banner-wrap">
      <img src={BannerImage} alt="recland banner" />
    </div>
  );
};

Banner.propTypes = {

};

export default Banner;
