import React, { useContext } from "react";
import Home from "./Pages/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen relative ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Fond étoilé */}
      <div className="stars"></div>

      {/* Header */}
      <header className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Profile Card App</h1>
        <button
          onClick={toggleTheme}
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 z-10"
        >
          {theme === "dark" ? "Mode Clair" : "Mode Sombre"}
        </button>
      </header>

      {/* Contenu */}
      <Home />
    </div>
  );
}


export default App;
