import React, { useState } from "react";
import logo from "./img/logo.png";
import { AiOutlineMenu, AiOutlineMinus } from "react-icons/ai";
import { useNavigation } from "./NavigationContext";

const Header = () => {
  const { navigate } = useNavigation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="header1">
      <div>
        <img src={logo} alt="Logo" className="logo" style={{ width: "90px", height: "70px", borderRadius: "50%", marginTop: "15px", position: "relative" }} />
      </div>

      <ul className={click ? "nav-menu1 active1" : "nav-menu1"}>
        <li>
          <button className="wallet-button" onClick={() => navigate("/")}>Home</button>
        </li>
        <li>
          <button className="wallet-button" onClick={() => navigate("/our-services")}>Our Services</button>
        </li>
        <li>
          <button className="wallet-button" onClick={() => navigate("/profile")}>Profile</button>
        </li>
        <li>
          <button className="wallet-button" onClick={() => navigate("/LogIn")}>Log In</button>
        </li>
      </ul>

      <div className="menubutton1" onClick={handleClick}>
        {click ? (
          <AiOutlineMinus size={25} style={{ color: "#fff" }} />
        ) : (
          <AiOutlineMenu size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </header>
  );
};

export default Header;
