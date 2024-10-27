import React from "react";
import { Link } from "react-router-dom";
import Property from "./Property";

const Properties = ({ properties, onHandleDelete }) => {
  if (properties.length === 0) {
    return <h3>No Properties Available</h3>;
  }

  return (
    <div className="properties">
      <div className="properties-header">
        <h2>Property List</h2>
        <Link to="/add-property">
          <button>Add Property</button>
        </Link>
      </div>

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
