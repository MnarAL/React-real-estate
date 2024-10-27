import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const AddPropertyForm = ({ onHandleAddProperty }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(""); 
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateInput = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!location.trim()) newErrors.location = "Location is required";
    if (price <= 0) newErrors.price = "Price must be positive";
    if (!image.trim()) newErrors.image = "Image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInput()) {
      const newProperty = {
        id: nanoid(),
        title,
        location,
        price,
        image, 
      };
      onHandleAddProperty(newProperty);
      setTitle("");
      setLocation("");
      setPrice("");
      setImage("");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Property</h2>

      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {errors.title && <span style={{ color: "red" }}>{errors.title}</span>}
      </div>

      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        {errors.location && (
          <span style={{ color: "red" }}>{errors.location}</span>
        )}
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        {errors.price && <span style={{ color: "red" }}>{errors.price}</span>}
      </div>

      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        {errors.image && <span style={{ color: "red" }}>{errors.image}</span>}

      
        {image && (
          <div>
            <p>Preview:</p>
            <img src={image} alt="Selected Preview" width="100" />
          </div>
        )}
      </div>

      <div>
        <button type="submit">Add New Property</button>
      </div>
    </form>
  );
};

export default AddPropertyForm;
