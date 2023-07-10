import React from 'react';
// import PropTypes from 'prop-types';

const Recommendation = () => {
  return (
    <section className="wrapper recommendation-wrap">
      <span className="rec__title">Đề xuất:</span>
      <ul className="rec__list">
        <li className="rec__item">Reactjs</li>
        <li className="rec__item">VueJS</li>
        <li className="rec__item">Angular</li>
        <li className="rec__item">Design</li>
        <li className="rec__item">.NET</li>
        <li className="rec__item">PHP</li>
        <li className="rec__item">java</li>
        <li className="rec__item">Mobile</li>
      </ul>
    </section>

  );
};

Recommendation.propTypes = {

};

export default Recommendation;
