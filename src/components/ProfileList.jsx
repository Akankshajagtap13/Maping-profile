import React from "react";
import ProfileCard from "./ProfileCard"; // Import ProfileCard

const ProfileList = ({ profiles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* Ensure all profiles are mapped and displayed */}
      {profiles && profiles.length > 0 ? (
        profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))
      ) : (
        <p>No profiles found</p> // Message if no profiles are available
      )}
    </div>
  );
};

export default ProfileList;
