import React, { useState } from 'react'
import styled from "styled-components";
import Results from "./Results";

const SearchResult = () => {

    let [searchInput, setSearchInput] = useState("")
    let [searchResult, setSearchResult]= useState([])

    let handleSubmit= () =>{
        console.log(searchInput)
    
        fetch(`https://www.omdbapi.com/?apikey=ca29d18&s=${searchInput}`)
        .then(res => res.json())
        .then(data =>{
    
            console.log(data)
            setSearchResult(data)
        })
        .catch((e)=>console.log(e))
    
    
    }
 

  return (
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
  )
}

let SearchWrapper = styled.div`

`;

export default SearchResult