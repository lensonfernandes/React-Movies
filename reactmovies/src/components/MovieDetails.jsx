import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

    let {imdbID} = useParams();

    let [movieInfo, setMovieInfo] = useState({});

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=ca29d18&i=${imdbID}`)
        .then(res=>res.json())
        .then(data=>setMovieInfo(data))
        .catch(e=>console.log(e))
    }, [])

  return (
    <div>
        <h2>Movie Details</h2>
        <p>MovieID: {imdbID}</p>
        {
            movieInfo && (
                <div>
                    <h3>Title:{movieInfo.Title}</h3>
                    <h4>Plot: {movieInfo.Plot}</h4>
                    <h5>Actors:{movieInfo.Actors}</h5>
                    <p>Rating:{movieInfo.imdbRating}</p>
                </div>
            )
        }
    </div>
  )
}

export default MovieDetails