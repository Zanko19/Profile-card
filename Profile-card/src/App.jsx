import React from "react";
import Home from "./Pages/Home";
import Starfield from "react-starfield";

function App() {
  return (
    <div className="min-h-screen relative bg-gray-900 text-white">
      {/* Fond étoilé */}
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Home />
    </div>
  );
}

export default App;
