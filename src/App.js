import React from "react";
import { render } from "react-dom";
import Peto from "./Pet";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import { StrictMode, useState } from "react";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
  // return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt me!"),
  //     React.createElement(Pet, {
  //       name: "Lana",
  //       animal: "Cat",
  //       breed: "Ahuacatera",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Perra",
  //       breed: "pug",
  //     }),
  //   ]);
};
render(<App />, document.getElementById("root"));
