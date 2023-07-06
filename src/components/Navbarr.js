import { useState } from "react";
import "../Scss/nav.css";
import LOGO from "../assests/images/logo.png";
import data from "../data";
import ReactSwitch from "react-switch";





function Navbarr() {
  // const [activeNav, setactiveNav]= useState('#');
  const [theme, setTheme] = useState("light")
  const ToggleThema = () => {
    setTheme ((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html" className="nav_logo">
          <img src={LOGO} alt="logo" />
        </a>
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        {/* <button id="theme_icon" onClick={() =>
          setshow(!show)}>
            <IoIosColorPalette />
          </button> */}
          {/* <BsFillMoonFill
            style={{
              marginLeft: "0.5rem",
              color: "#FDB713",
              marginBottom: "1rem",
            }}
          />
        </div> */}
        {/* {show ? (
          <div className="drop">
            <div className="dropdown-content">
              <div className="theme-options">
                <div id="theme-light" />
                <div id="theme-black" />
                
              </div>
            </div>
          </div>
        ) : null} */}
      </div>

      {/* <a href="#" onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a> */}
    </nav>
  );
}

export default Navbarr;
