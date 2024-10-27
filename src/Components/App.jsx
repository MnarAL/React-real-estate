import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Properties from "./Properties";
import AddPropertyForm from "./AddPropertyForm";
import Layout from "./Layout";
import EditProperty from "./EditProperty";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute"; 

const PropertiesData = [
  {
    id: 1,
    title: "Luxury Apartment in Downtown",
    price: 1200000,
    image:
      "https://images1.apartments.com/i2/0sj1fnkpGyKN2ql8seiR7ZUNYGTliWPkRpFFAaQ1s2k/117/image.jpg",
    location: "Dubai",
  },
  {
    id: 2,
    title: "Modern Villa with Sea View",
    price: 5000000,
    image:
      "https://broker.hr/_next/image?url=https%3A%2F%2Fhub.broker.hr%2Fwp-content%2Fuploads%2Fassets%2F2043-28%2F2043-28-001-2043-28-vodice-newbuilt-villa-with-sea-view-for-sale-1920x1080.jpg.webp&w=3840&q=75",
    location: "Doha",
  },
  {
    id: 3,
    title: "Cozy Studio Close to Amenities",
    price: 300000,
    image:
      "https://media.vrbo.com/lodging/101000000/100040000/100032300/100032287/ecdf022e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    location: "Riyadh",
  },
];

const App = () => {
  const [properties, setProperties] = useState(PropertiesData);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const handleLogin = () => setIsAuthenticated(true); 
  const handleLogout = () => setIsAuthenticated(false); 

 
  const handleAddProperty = (newProperty) => {
    setProperties((prevProperties) => [...prevProperties, newProperty]);
  };

  const handleDelete = (id) => {
    const filteredProperties = properties.filter(
      (property) => property.id !== id
    );
    setProperties(filteredProperties);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Properties
                properties={properties}
                onHandleDelete={handleDelete}
              />
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          <Route
            path="/add-property"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <AddPropertyForm onHandleAddProperty={handleAddProperty} />
              </PrivateRoute>
            }
          />

          <Route
            path="/edit-property/:id"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <EditProperty />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
