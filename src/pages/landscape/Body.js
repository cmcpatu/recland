import React from 'react';
import Banner from './Banner';
import SearchArea from './SearchArea';
import Jobs from './Jobs';
import Recommendation from './Recommendation';
import Advantage from './Advantage';
import Partner from './Partner';
import WorkProcess from './WorkProcess';
import Footer from './Footer';
// import PropTypes from 'prop-types';

const Body = () => {
  return (
    <div className="body-content">
      <Banner />
      <SearchArea />
      <Recommendation />
      <Jobs />
      <Advantage />
      <Partner />
      <WorkProcess />
      <Footer />
    </div>
  );
};

Body.propTypes = {

};

export default Body;
