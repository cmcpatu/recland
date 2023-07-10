import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({
  title,
  subTitle,
}) => {
  return (
    <div className="dark-blue-text">
      {subTitle && (
        <div className="font-size-18 horizontal-align-center mb-default">{subTitle}</div>
      )}
      <div className="font-size-34 horizontal-align-center font-weight-bold">{title}</div>
    </div>
  );
};

SectionHeader.defaultProps = {
  subTitle: '',
};

SectionHeader.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
