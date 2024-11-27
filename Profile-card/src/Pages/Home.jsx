import React from "react";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  const profileData = {
    name: "Guigui",
    title: "Web Dev",
    image: "/src/assets/profile.jpg", // Remplace par une image valide
    description: "Passionate about building amazing web experiences.",
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ProfileCard
        name={profileData.name}
        title={profileData.title}
        image={profileData.image}
        description={profileData.description}
      />
    </div>
  );
};

export default Home;
