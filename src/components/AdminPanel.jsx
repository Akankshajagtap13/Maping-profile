import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    id: "",
    name: "",
    latitude: "",
    longitude: "",
    description: "",
    location: "",
    contact: "",
    photoUrl: "",
    interests: "",
  });

  const [editingProfile, setEditingProfile] = useState(null);

  // Handle input field change
  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  // Add new profile
  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({
      id: "",
      name: "",
      latitude: "",
      longitude: "",
      description: "",
      location: "",
      contact: "",
      photoUrl: "",
      interests: "",
    });
  };

  // Delete profile
  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  // Edit profile
  const handleEditProfile = (profile) => {
    setEditingProfile(profile);
    setNewProfile({
      ...profile,
    });
  };

  // Update profile
  const handleUpdateProfile = () => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === newProfile.id ? newProfile : profile
    );
    setProfiles(updatedProfiles);
    setNewProfile({
      id: "",
      name: "",
      latitude: "",
      longitude: "",
      description: "",
      location: "",
      contact: "",
      photoUrl: "",
      interests: "",
    });
    setEditingProfile(null); // Reset the editing state
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>

      {/* Add/Edit Profile Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {editingProfile ? "Edit Profile" : "Add New Profile"}
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newProfile.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newProfile.location}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newProfile.description}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              value={newProfile.photoUrl}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="interests"
              placeholder="Interests"
              value={newProfile.interests}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="flex justify-center">
            {editingProfile ? (
              <button
                type="button"
                onClick={handleUpdateProfile}
                className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors"
              >
                Update Profile
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAddProfile}
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
              >
                Add Profile
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Profile List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Profile List</h2>
        <ul className="space-y-4">
          {profiles.map((profile) => (
            <li
              key={profile.id}
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-md hover:bg-gray-50 transition-all"
            >
              <div>
                <h3 className="text-xl font-semibold">{profile.name}</h3>
                <p className="text-sm text-gray-600">{profile.location}</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleEditProfile(profile)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProfile(profile.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Go to Home Page Button */}
      <div className="flex justify-center mt-6">
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
