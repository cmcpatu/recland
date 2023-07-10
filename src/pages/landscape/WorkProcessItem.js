import React from 'react';
import PropTypes from 'prop-types';

const WorkProcessItem = ({
  item,
}) => {
  return (
    <div className="wpi__container">
      <div className="wpi__count__wrap">
        <div className="wpi__count">
          <div className="wpi__count__text">
            {item.count}
          </div>
        </div>
      </div>
      <div className="wpi__image">
        <img src={item.image} alt="work process item" />
      </div>
      <div className="wpi__title">{item.title}</div>
      <p className="wpi__description">{item.desc}</p>
    </div>
  );
};

// WorkProcessItem.defaultProps = {
// };

WorkProcessItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default WorkProcessItem;
