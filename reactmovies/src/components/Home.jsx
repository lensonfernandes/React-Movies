import React, { useState } from "react";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./SearchResult";


const Home = () => {






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
          <Route path="/movies/:imdbID"   element={<MovieDetails   />}    />

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
 
  font-size: 32px;
  height: 60px;
`;

let Navbar = styled.div`
  padding-left: 30px;
  font-weight: 400;
`;

let WhiteLine = styled.hr``;





export default Home;
