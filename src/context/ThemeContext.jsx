import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const dataSharing = {
    theme,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={dataSharing}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContext;
