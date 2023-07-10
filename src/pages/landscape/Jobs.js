import React from 'react';
import JobItem from './JobItem';
// import PropTypes from 'prop-types';
import HeartImage from '../../resources/images/heart.svg';
import jobsList from './jobs-mock-data';

const Jobs = () => {
  return (
    <section className="wrapper jobs-wrap">
      <div className="jobs__header">
        <div className="jobs__header__left">
          <div className="jobs__icon">
            <img src={HeartImage} alt="heart icon" />
          </div>
          <h1 className="jobs__heading">
            Jobs tốt nhất
          </h1>
        </div>
        <div className="jobs__header__right">
          <a href="#">Xem tất cả</a>
        </div>
      </div>
      <div className="jobs__grid">
        {jobsList.map((item) => {
          return (
            <JobItem {...item} />
          );
        })}
      </div>
    </section>
  );
};

Jobs.propTypes = {

};

export default Jobs;
