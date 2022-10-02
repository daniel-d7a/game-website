import "./App.css";
import Main from "./components/main";
import { useState } from "react";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import SingleGame from "./components/singleGame";
import Favourites from "./components/favourites";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="games/:id" element={<SingleGame />} />
        <Route exact path="favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
