import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateToy }) {
  const toyCards = [];

  for (let i = 0; i < toys.length; i++) {
    toyCards.push(
      <ToyCard
        key={toys[i].id}
        toy={toys[i]}
        onDeleteToy={onDeleteToy}
        onUpdateToy={onUpdateToy}
      />
    );
  }

  return <div className="card-container">{toyCards}</div>;
}

export default ToyContainer;