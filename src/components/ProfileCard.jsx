import React from "react";

const ProfileCard = ({ profile, onClick, className }) => {
  return (
    <div
      className={`p-4 bg-indigo-100 rounded-lg shadow-md cursor-pointer hover:bg-indigo-200 transition-all ${className}`}
      onClick={onClick}
    >
      <img
        src={profile.photoUrl}
        alt={profile.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-400"
      />
      <h3 className="text-xl font-semibold text-indigo-800 text-center mb-2">
        {profile.name}
      </h3>
      <p className="text-sm text-gray-600 text-center mb-2">
        {profile.location}
      </p>
      <p className="text-sm text-gray-700 text-center mb-4">
        {profile.description}
      </p>
      <div className="text-center text-indigo-600">
        <p>Interests: {profile.interests}</p>
      </div>
      <button
        onClick={onClick}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Summary
      </button>
    </div>
  );
};

export default ProfileCard;
