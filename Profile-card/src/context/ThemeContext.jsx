import React, { createContext, useState, useEffect } from "react";

// Création du contexte
export const ThemeContext = createContext();

// Fournisseur du thème
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" // Charger le thème depuis le stockage local
  );

  // Applique la classe `dark` sur le <html> selon le thème
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Sauvegarder dans le stockage local
  }, [theme]);

  // Basculer entre clair et sombre
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
