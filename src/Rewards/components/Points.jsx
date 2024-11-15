import React from "react";

const Points = ({ points }) => {
  return (
    <div className="points--main--cont--h">
      <h1>Total Points</h1>
      <h2>{points}</h2>
      <button className="redeem-points-ar">Redeem Points</button>
    </div>
  );
};

export default Points;
