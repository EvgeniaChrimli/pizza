import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import "./scss/app.scss";
import Header from "./components/Header";
import NotFound from "./Pages/NotFound";
import Basket from "./Pages/Basket";

export const SearchContext = React.createContext("");

function App() {
 

  const [searchValue, setSearchValue] = useState("");

  return (
    <div class="wrapper">
      

      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div class="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Basket" element={<Basket />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
  </SearchContext.Provider>
    </div>
  );
}

export default App;
