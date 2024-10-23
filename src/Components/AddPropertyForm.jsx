import React, { useState } from "react";
import { nanoid } from "nanoid";

const AddPropertyForm = ({ onHandleAddProperty }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProperty = {
      id: nanoid(),
      title,
      location,
      price,
      image: imageUrl,
    };

    onHandleAddProperty(newProperty);
    setTitle("");
    setPrice(0);
    setLocation("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <label htmlFor="imageUrl">Image:</label>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />

      <button type="submit">Add new Property</button>
    </form>
  );
};

export default AddPropertyForm;
