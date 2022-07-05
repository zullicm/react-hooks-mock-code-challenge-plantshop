import React, {useState}from "react";

function PlantCard({ plant }) {
  const {id, name, image, price} = plant
  const [stocked, setStocked] = useState(true)

  function setPlantStock(){
    setStocked(!stocked)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button onClick={setPlantStock} className="primary">In Stock</button>
      ) : (
        <button onClick={setPlantStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
