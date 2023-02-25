import React from 'react'
import Card from './Card'

const Results = ({searchResult}) => {

let temp = searchResult.Search;



  return (
    <div>
        <h2>Movies Results for Title</h2>

        {temp && temp.map(e=><div>{e.Title}</div>)}
        <div>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Results