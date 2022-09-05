import React from 'react';

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div>
            <input type="text" 
            className="search" 
            placeholder="Search Arworks..."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
    );
};

export default Search;