import React from "react";

const ProfileCard = ({ name, title, image, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-lg relative">
      <div className="absolute -top-8 left-4">
        
        <img
          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
          src={image}
          alt={`${name}'s profile`}
        />
      </div>
      <div className="p-6 pt-12">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm">{title}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
