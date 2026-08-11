import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newToy = {
      name: name,
      image: image,
      likes: 0,
    };

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddToy(data);
        setName("");
        setImage("");
      });
  }

  return (
    <div className="shadow-card">
      <h2>Add a Toy</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Toy Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter a toy's name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          placeholder="Enter a toy's image URL..."
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <button type="submit">Create New Toy</button>
      </form>
    </div>
  );
}

export default ToyForm;
