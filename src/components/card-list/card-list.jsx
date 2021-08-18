import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card";

export const CardList = (props) => {
  // props.children will be anything between the tags
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
