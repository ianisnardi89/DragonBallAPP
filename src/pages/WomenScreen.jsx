import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const WomenScreen = () => {
  const women = Characters.filter((character) => character.type === "m");

  return (
    <div className="container mt-3">
      <h1>Women Screen</h1>
      <hr />

      <div className="row">
        {women.map((women) => (
          <Card key={women.id} {...women} />
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;
