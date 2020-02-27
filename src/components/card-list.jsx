import React from "react";
import Card from "./card";
import "./card-list.style.css";

const CardList = function(props) {
  return (
    <div className={"card-list"}>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
export default CardList;
