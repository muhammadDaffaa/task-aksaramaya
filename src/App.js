import React from "react";
import MainContent from "./components/MainContent";
import ThemeContextProvider from "./context/ThemeContext";
import "./components/MainContent.css";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <MainContent />
      </ThemeContextProvider>
    </div>
  );
};

export default App;
