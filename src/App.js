import React from "react";
import Peto from "./Pet";
import { Route, Routes, Link } from "react-router-dom";
import { StrictMode, useState, lazy, Suspense } from "react";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div
          className="p-0 m-0"
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
          }}
        >
          <Suspense fallback={<h1>loading route ...</h1>}>
            
              <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
                <Link
                  className="text-6xl text-white hover:text-gray-200"
                  to="/"
                >
                  Adopt Me!
                </Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            
          </Suspense>
        </div>
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

export default App;
