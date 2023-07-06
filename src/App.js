import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Headerr from "./components/Headerr";
import Navbarr from "./components/Navbarr";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Service from "./components/Service";
import { useState } from "react";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { createContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "styled-components";

export const ThmeContext = createContext(null);

function App() {
  const [skills, setskills] = useState([
    {
      img: "https://i.postimg.cc/vTkGR0jV/html5.png",
      title: "HTML",
    },
    {
      img: "https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png",
      title: "CSS",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      title: "JavaScript",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      title: "Bootstrap",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      title: "React",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
      title: "Node JS",
    },
    {
      img: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
      title: "Express JS",
    },
    {
      img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png",
      title: "MongoDB",
    },
    {
      img: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
      title: "Python",
    },
    {
      img: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
      title: "MySQL",
    },
  ]);
  const [theme, setTheme] = useState("light");
  const ToggleThema = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleThema }}>
      <div className="App" id={theme}>
        <Navbarr />
        <div>
          {/* <h3>{theme === "light" ? "Light Mode" : "Dark Mode"}</h3> */}
          <ReactSwitch
            className="switch"
            onChange={ToggleThema}
            checked={theme === "dark"}
          />
        </div>
        <Headerr />
        <About />
        <Service />
        <Portfolio />
        <Experience skills={skills} />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
