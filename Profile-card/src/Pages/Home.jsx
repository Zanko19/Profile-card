import React from "react";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  const profileData = {
    name: "Guillaume Dedeurwaerder",
    title: "Junior Frontend Web Developer",
    image: "/src/assets/moi.jpg", // Remplace par une image valide
    description: "Passionate about building amazing web experiences.",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      {/* Carte de profil */}
      <ProfileCard
        name={profileData.name}
        title={profileData.title}
        image={profileData.image}
        description={profileData.description}
      />

      {/* Boîte séparée pour les réseaux sociaux */}
      <div className="glow-card w-full max-w-sm p-4 rounded-lg flex justify-evenly">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-500"
        >
          {/* Icône LinkedIn */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.234c-.966 0-1.75-.799-1.75-1.766s.784-1.766 1.75-1.766 1.75.799 1.75 1.766-.784 1.766-1.75 1.766zm13.5 11.234h-3v-5.604c0-1.337-.026-3.059-1.862-3.059-1.863 0-2.147 1.455-2.147 2.96v5.703h-3v-10h2.879v1.367h.041c.4-.755 1.379-1.55 2.841-1.55 3.041 0 3.603 2.001 3.603 4.604v5.579z" />
          </svg>
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-gray-500"
        >
          {/* Icône GitHub */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.799 8.207 11.387.6.113.793-.261.793-.579 0-.287-.01-1.044-.016-2.05-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.086 1.84 1.236 1.84 1.236 1.071 1.834 2.809 1.304 3.495.997.109-.775.418-1.304.761-1.604-2.665-.302-5.466-1.334-5.466-5.931 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.521.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.398 3.003-.403 1.019.005 2.046.137 3.005.403 2.291-1.553 3.297-1.23 3.297-1.23.654 1.655.243 2.873.119 3.176.77.84 1.234 1.912 1.234 3.222 0 4.609-2.804 5.624-5.475 5.921.43.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.19.696.799.578 4.765-1.589 8.199-6.083 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-400"
        >
          {/* Icône Twitter */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 002.17-2.72 9.72 9.72 0 01-3.1 1.19 4.92 4.92 0 00-8.39 4.48 13.94 13.94 0 01-10.11-5.13 4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.61v.06c0 2.37 1.69 4.34 3.94 4.79a4.92 4.92 0 01-2.22.08 4.93 4.93 0 004.6 3.42 9.86 9.86 0 01-6.1 2.1c-.39 0-.78-.02-1.17-.07a13.91 13.91 0 007.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63a9.98 9.98 0 002.46-2.54z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
