import React from "react";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";
import Results from "./Results";

const Home = () => {
  return (
    <div>
      <NavbarWrapper>
        <Navbar> Movies App </Navbar>
      </NavbarWrapper>
      <WhiteLine />
      <SearchWrapper>
        <h2>Search For Movies By Their Title</h2>
        <input></input><br></br>
        <button>Search Now</button>
      </SearchWrapper>
      <Results />
      <MovieDetails />
    </div>
  );
};

let NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 32px;
  height: 60px;
`;

let Navbar = styled.div`
  padding-left: 30px;
`;


let WhiteLine = styled.hr`

`


let SearchWrapper = styled.div`

color: white;
`

export default Home;
