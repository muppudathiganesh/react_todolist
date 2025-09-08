
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Blog from "./Blog";

function App() {
  return (
    <ThemeProvider>
      <Blog />
    </ThemeProvider>
  );
}

export default App;
