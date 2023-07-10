import React from 'react';
import PropTypes from 'prop-types';

const JobItem = ({
  image,
  title,
  type,
  leftMoneyType,
  leftValue,
  rightMoneyType,
  rightValue,
  location,
  status,
  rank,
}) => {
  return (
    <div className="jobs__item">
      <div className="jobs__item__heading">
        <div className="jobs__item__heading__left">
          <img src={image} alt="job 1" />
          <div className="jobs__item__title">{title}</div>
        </div>
        <div className="jobs__item__heading__right">{type}</div>
      </div>
      <div className="jobs__item__body">
        <div className="jobs__item__body__left">
          <div className="jobs__item__body__money__type">{leftMoneyType}</div>
          <div className="jobs__item__body__money">{leftValue}</div>
        </div>
        <div className="jobs__item__body__right">
          <div className="jobs__item__body__money__type">{rightMoneyType}</div>
          <div className="jobs__item__body__money">{rightValue}</div>
        </div>
      </div>
      <div className="jobs__item__footer">
        <div className="jobs__item__footer__left">
          <div className="jobs__item__location">{location}</div>
          <div className="jobs__item__status">{status}</div>
        </div>
        <div className="jobs__item__footer__right">{rank}</div>
      </div>
    </div>
  );
};

JobItem.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  leftMoneyType: PropTypes.string.isRequired,
  leftValue: PropTypes.string.isRequired,
  rightMoneyType: PropTypes.string.isRequired,
  rightValue: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};

export default JobItem;
