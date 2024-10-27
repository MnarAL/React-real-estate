import React from "react";

const Property = ({ property, onHandleDelete }) => {
  const handleDelete = () => {
    onHandleDelete(property.id);
  };
  console.log("image of property ", property.image);
  return (
    <div className="property">
      
      {property.image && (
        <img src={property.image} alt={property.title} width="100" />
      )}
      <h3>{property.title}</h3>
      <p>Location: {property.location}</p>
      <p>Price: ${property.price}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Property;
