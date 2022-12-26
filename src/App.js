import { createContext, useState } from "react";

import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const themeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider>
      <div className="App" id={theme} >
        <Navbar toggle={toggleTheme} />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </themeContext.Provider>
  );
}

export default App;
