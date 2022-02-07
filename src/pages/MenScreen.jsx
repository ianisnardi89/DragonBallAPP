import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const men = Characters.filter((character) => character.type === "h");

  return (
    <div className="container mt-3">
      <h1>Men Screen</h1>
      <hr />

      <div className="row">
        {men.map((men) => (
          <Card key={men.id} {...men} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
