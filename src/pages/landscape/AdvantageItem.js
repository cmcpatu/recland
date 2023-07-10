import React from 'react';
import PropTypes from 'prop-types';

const AdvantageItem = ({
  item,
}) => {
  return (
    <div className={`advi__container ${item.bgColorClass}`}>
      <div className="advi__image">
        <img src={item.image} alt="advantage item" />
      </div>
      <div className="advi__title">{item.title}</div>
      <p className="advi__description">{item.desc}</p>
    </div>
  );
};

// AdvantageItem.defaultProps = {
// };

AdvantageItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default AdvantageItem;
