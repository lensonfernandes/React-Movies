import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Results = ({ searchResult }) => {
  let temp = searchResult.Search;

  return (
    <div>
      <h2>Movies Results for Title</h2>

      {temp &&
        temp.map((e, i) => {
         let temp = e.imdbID
         return (<div key={i}>
            <h3>{e.Title}</h3>
            <h4>{e.Year}</h4>
            <h5>{e.imdbID}</h5>
            <p>{e.Type}</p>
            <button>
              {" "}
              <Link to={`movies/${temp}`}>More details</Link>
            </button>
            <hr />
          </div>);
        })}
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Results;
