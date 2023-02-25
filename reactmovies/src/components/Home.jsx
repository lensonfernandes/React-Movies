import React, { useState } from "react";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./SearchResult";

const Home = () => {

let [searchInput, setSearchInput] = useState("")




  return (
    <BrowserRouter>
      <div>
        <NavbarWrapper>
          <Navbar> Movies App </Navbar>
        </NavbarWrapper>
        <WhiteLine />
        <Routes>
          {" "}
          <Route path="/" element={<SearchResult />} />
          <Route path="/movies/:imdbID"   element={<MovieDetails searchInput={searchInput} setSearchInput={setSearchInput}  />}    />

          </Routes>
      
          {/* <MovieDetails />
        */}
      </div>
    </BrowserRouter>
  );
};

let NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
 

  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 32px;
  height: 60px;
`;

let Navbar = styled.div`
  padding-left: 30px;
`;

let WhiteLine = styled.hr``;





export default Home;
