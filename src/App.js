import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import Home from "./components/Home";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeColor = (color)=> {
    setTheme(color)
  }
  return (
    <div className="app" mode={theme}>
      <BrowserRouter>
        <Header switchColor={themeColor} currentColor={theme}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/countries">
            <Route index element={<Home/>}/>
            <Route path=":name" element={<Country/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;