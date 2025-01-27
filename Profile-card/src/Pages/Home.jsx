import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth/2, y: window.innerHeight/2 });
  const [size, setSize] = useState(32);
  const [stars, setStars] = useState([]);
  const [isExploded, setIsExploded] = useState(false);
  const [keys, setKeys] = useState({});
  const [score, setScore] = useState(0);
  const speed = 5;
  
  const profileData = {
    name: "Guillaume Dedeurwaerder",
    title: "Expert Frontend Developer", 
    image: "/src/assets/moi.jpg",
    description: "Passionné par le développement web moderne et les interfaces utilisateur innovantes. Spécialisé en React, TailwindCSS et animations web.",
  };

  useEffect(() => {
    // Initialiser les étoiles
    const generateStars = () => {
      return Array(10).fill().map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: 1 + Math.random() * 2
      }));
    };
    setStars(generateStars());

    // Gestionnaire d'événements clavier
    const handleKeyDown = (e) => {
      setKeys(prev => ({ ...prev, [e.key]: true }));
    };
    const handleKeyUp = (e) => {
      setKeys(prev => ({ ...prev, [e.key]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (isExploded) return;

    const gameLoop = setInterval(() => {
      // Mouvement du joueur
      setPosition(prev => {
        const newPos = { ...prev };
        if (keys.ArrowUp) newPos.y -= speed;
        if (keys.ArrowDown) newPos.y += speed;
        if (keys.ArrowLeft) newPos.x -= speed;
        if (keys.ArrowRight) newPos.x += speed;
        
        return {
          x: Math.max(0, Math.min(window.innerWidth - size, newPos.x)),
          y: Math.max(0, Math.min(window.innerHeight - size, newPos.y))
        };
      });

      // Collision avec les étoiles
      setStars(prevStars => {
        return prevStars.map(star => {
          const dx = position.x - star.x;
          const dy = position.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < size/2 + 10) {
            setScore(prev => prev + 1);
            setSize(prev => {
              const newSize = prev + 2;
              if (newSize > 200) setIsExploded(true);
              return newSize;
            });
            return {
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              speed: 1 + Math.random() * 2
            };
          }

          // Mouvement d'évitement des étoiles
          if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            return {
              ...star,
              x: star.x - Math.cos(angle) * star.speed,
              y: star.y - Math.sin(angle) * star.speed
            };
          }

          return star;
        });
      });
    }, 16);

    return () => clearInterval(gameLoop);
  }, [keys, position, size, isExploded]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Score */}
      <div className="absolute top-4 left-4 text-2xl text-white z-30">
        Score: {score}
      </div>

      {/* Image contrôlable */}
      {!isExploded ? (
        <img
          src={profileData.image}
          alt={profileData.name}
          className="absolute rounded-full object-cover z-20 transition-all duration-75"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `translate(${position.x}px, ${position.y}px)`,
            boxShadow: '0 0 20px rgba(139,92,246,0.5)'
          }}
        />
      ) : (
        <div className="absolute text-4xl text-red-500 font-bold z-30"
             style={{
               transform: `translate(${position.x}px, ${position.y}px)`,
             }}>
          💥 BOOM!
        </div>
      )}

      {/* Étoiles */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-yellow-300 rounded-full animate-pulse"
          style={{
            transform: `translate(${star.x}px, ${star.y}px)`,
            boxShadow: '0 0 10px rgba(255,255,0,0.8)'
          }}
        />
      ))}

      <div className="flex flex-col items-center justify-center min-h-screen space-y-8 relative z-10">
        {/* Carte de profil principale */}
        <div 
          className="max-w-md w-full transform transition-all duration-300 hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)] hover:shadow-[0_0_70px_rgba(139,92,246,0.5)] transition-all duration-500">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {profileData.name}
              </h1>
              <p className="text-xl font-medium text-gray-300">{profileData.title}</p>
              <p className="text-gray-400 leading-relaxed">{profileData.description}</p>

              <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95">
                Voir mon portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex space-x-8">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transform transition-all duration-300 hover:scale-110 hover:text-purple-400"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.234c-.966 0-1.75-.799-1.75-1.766s.784-1.766 1.75-1.766 1.75.799 1.75 1.766-.784 1.766-1.75 1.766zm13.5 11.234h-3v-5.604c0-1.337-.026-3.059-1.862-3.059-1.863 0-2.147 1.455-2.147 2.96v5.703h-3v-10h2.879v1.367h.041c.4-.755 1.379-1.55 2.841-1.55 3.041 0 3.603 2.001 3.603 4.604v5.579z" />
            </svg>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transform transition-all duration-300 hover:scale-110 hover:text-purple-400"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.799 8.207 11.387.6.113.793-.261.793-.579 0-.287-.01-1.044-.016-2.05-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.086 1.84 1.236 1.84 1.236 1.071 1.834 2.809 1.304 3.495.997.109-.775.418-1.304.761-1.604-2.665-.302-5.466-1.334-5.466-5.931 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.521.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.398 3.003-.403 1.019.005 2.046.137 3.005.403 2.291-1.553 3.297-1.23 3.297-1.23.654 1.655.243 2.873.119 3.176.77.84 1.234 1.912 1.234 3.222 0 4.609-2.804 5.624-5.475 5.921.43.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.19.696.799.578 4.765-1.589 8.199-6.083 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="transform transition-all duration-300 hover:scale-110 hover:text-purple-400"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 002.17-2.72 9.72 9.72 0 01-3.1 1.19 4.92 4.92 0 00-8.39 4.48 13.94 13.94 0 01-10.11-5.13 4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.61v.06c0 2.37 1.69 4.34 3.94 4.79a4.92 4.92 0 01-2.22.08 4.93 4.93 0 004.6 3.42 9.86 9.86 0 01-6.1 2.1c-.39 0-.78-.02-1.17-.07a13.91 13.91 0 007.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63a9.98 9.98 0 002.46-2.54z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
