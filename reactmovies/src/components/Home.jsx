import React, { useState } from "react";
import styled from "styled-components";
import MovieDetails from "./MovieDetails";
import Results from "./Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {

let [searchInput, setSearchInput] = useState("")
let [searchResult, setSearchResult]= useState([])

let handleSubmit= () =>{
    console.log(searchInput)

    fetch(`https://www.omdbapi.com/?apikey=ca29d18&s=harry`)
    .then(res => res.json())
    .then(data =>{

        console.log(data)
        setSearchResult(data)
    })
    .catch((e)=>console.log(e))


}

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

          </Routes>
          <SearchResult>
            <div>
              {" "}
              <SearchWrapper>
                <h2>Search For Movies By Their Title</h2>
                <input value={searchInput} onChange={e=>setSearchInput(e.target.value)} ></input>
                <br></br>
                <button onClick={handleSubmit}>Search Now</button>
              </SearchWrapper>
              <Results  searchResult={searchResult} />
            </div>
          </SearchResult>
          <MovieDetails />
       
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

let SearchWrapper = styled.div`

`;

let SearchResult = styled.div``;

export default Home;
