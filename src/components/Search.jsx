import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="search" />

            <input type="text" 
            placeholder='Stream through thousands of movies here!'
            onChange={(event)=> setSearchTerm(event.target.value)}
            />

            

        </div>

    </div>
  )
}

export default Search
