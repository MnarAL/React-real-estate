import React from "react";
import PropertyLocation from "./PropertyLocation";
import PropertyImage from "./PropertyImage";
import PropertyTitle from "./PropertyTitle";
import PropertyPrice from "./PropertyPrice";

const Property = (props) => {
  const { property, onHandleDelete } = props;

  const handleDelete = (id) => {
    onHandleDelete(id);
  };

  return (
    <div className="property">
      <PropertyImage image={property.image} title={property.title} />
      <PropertyTitle title={property.title} />
      <PropertyLocation location={property.location} />
      <PropertyPrice price={property.price} />
      <button onClick={() => handleDelete(property.id)}>Delete</button>
    </div>
  );
};

export default Property;
