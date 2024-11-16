import React from "react";
import { useLocation } from "react-router-dom";

const ProfileDetails = () => {
  const location = useLocation();
  const { profile } = location.state || {};

  if (!profile) {
    return <p>No profile data available.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <p className="mt-2">{profile.description}</p>
      <p className="mt-2">Location: {profile.location}</p>
      <p className="mt-2">Contact: {profile.contact}</p>
      <p className="mt-2">Interests: {profile.interests}</p>
    </div>
  );
};

export default ProfileDetails;
