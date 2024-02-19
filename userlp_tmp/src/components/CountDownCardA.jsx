import React from 'react';

const CountDownSquareA = ({ label, number, cardRef }) => {
  return (
    <div className="countdown__cardA  text-white">
      <div className="countdown__card__bgA text-white" ref={cardRef}>
        <div className="countdown__card__numberA  text-white" id={label}>
          {number}
        </div>
      </div>
      <div className="countdown__card__labelA text-white">{label}</div>
    </div>
  );
};

export default CountDownSquareA;
