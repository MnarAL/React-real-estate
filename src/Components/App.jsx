import React, { useState } from "react";
import Properties from "./Properties";
import AddPropertyForm from "./AddPropertyForm";


const PropertiesData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    location: "Jeddah",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    location: "Riyadh",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    location: "Riyadh",
  },

  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    location: "Jeddah ",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    location: "Jeddah ",
  },
 
];

const App = () => {
  const [properties, setProperties] = useState(PropertiesData);

  const handleDelete = (id) => {
    const filteredProperties = properties.filter(
      (property) => property.id !== id
    );
    setProperties(filteredProperties);
  };

  const handleAddProperty = (newProperty) => {
    setProperties((prevProperties) => [...prevProperties, newProperty]);
  };

  return (
    <div>
      
      <AddPropertyForm onHandleAddProperty={handleAddProperty} />
      <Properties properties={properties} onHandleDelete={handleDelete} />
    </div>
  );
};

export default App;
