import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Header = ({switchColor, currentColor}) => {
  const [themeMode, setThemeMode] = useState("dark");
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/countries")
  }
  const handleChangeTheme = () => {
    let mode;
    if(currentColor=="light"){
        mode = "dark"
        switchColor(mode)
        setThemeMode("light")
    }else{
        mode = "light"
        switchColor(mode)
        setThemeMode("dark")
    }
  };

  return (
    <div className="navbar">
      <p className="logo">
        <span onClick={handleGoHome}>Where in the world ?</span>
      </p>
      <div className="theme" onClick={handleChangeTheme}>
        <IoMoonOutline />
        <p>{themeMode} Mode</p>
      </div>
    </div>
  );
};

export default Header;
