import React from "react";
import "./card.style.css";

const Card = function(props) {
  return (
    <div className={"card-container"}>
      <img
        alt="monsters"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180*180`}
      />
      <h3>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  );
};
export default Card;
