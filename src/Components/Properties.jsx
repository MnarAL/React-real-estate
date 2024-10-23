import React from "react";
import Property from "./Property";

const Properties = ({ properties, onHandleDelete }) => {
  if (properties.length === 0) {
    return <h3>No Properties Available</h3>;
  }

  return (
    <div className="properties">
      {properties.map((property) => (
        <Property
          key={property.id}
          property={property}
          onHandleDelete={onHandleDelete}
        />
      ))}
    </div>
  );
};

export default Properties;
