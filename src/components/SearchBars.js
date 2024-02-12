import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchBars = ({continents, searchValue, filterValue}) => {

    const [searchInput, setSearchInput] = useState("")

    const handleSearch = (e) => {
        setSearchInput(e.target.value)
    }
    
    const handleFilter = (e) => {
        // to send filter value from child to parent
        filterValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // to send search value from child to parent
        searchValue(searchInput)
    }

    return (
        <div className='searchBars'>
            <div className='search'>
                <form onSubmit={handleSubmit}>
                    <IoIosSearch className='icon-search'/>
                    <input type='search' onChange={handleSearch} placeholder='Search for a country...'/>
                </form>
            </div>
            <div className='filter'>
                    <select onChange={handleFilter}>
                        <option value="all">All continents (Filter)</option>
                        {
                            continents&&
                            continents.map((elem,key)=>{
                                return(
                                    <option value={elem} key={key}>{elem}</option>
                                )
                            })
                        }
                    </select>
            </div>
        </div>
    )
}

export default SearchBars