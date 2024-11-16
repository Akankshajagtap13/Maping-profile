import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./components/ProfileDetails";
import HomePage from "./components/HomePage";
import AdminPanel from "./components/AdminPanel"; // Import the Admin Panel component
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John Doe",
      latitude: 40.7128,
      longitude: -74.006,
      description: "Software Developer with 5 years of experience.",
      location: "New York, NY",
      contact: "john.doe@example.com",
      photoUrl: "https://via.placeholder.com/150",
      interests: "Coding, Traveling, Music",
    },
    {
      id: 2,
      name: "Jane Smith",
      latitude: 34.0522,
      longitude: -118.2437,
      description: "Product Manager.",
      location: "Los Angeles, CA",
      contact: "jane.smith@example.com",
      photoUrl: "https://via.placeholder.com/150",
      interests: "Reading, Hiking",
    },
    // More profiles here...
  ]);

  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage profiles={profiles} />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route
            path="/admin"
            element={
              <AdminPanel profiles={profiles} setProfiles={setProfiles} />
            } // Pass profiles and setProfiles to Admin Panel
          />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
