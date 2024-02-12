import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBars from "./SearchBars";
import Countries from "./Countries";
import { GoChevronUp } from "react-icons/go";
const Home = () => {
    const [countries, setCountries] = useState([])

    const[searchInput, setSearchInput ] = useState("")
    const[filterInput, setFilterInput ] = useState("all")

    const handleButtonTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(()=>{

      const fetching = async()=>{
            const response = await axios.get("https://restcountries.com/v3.1/all")
            const data = await response.data;
            setCountries(data);
        }
      fetching();
    },[])
  
    
  
    const uniqueContinents = () => {
      // this function to distinct unqiue continents 
  
      let continents= [];
      countries.map(country=>{continents.push(String(country.continents))})
  
      // to set unique array form the previous array (continents)
      let uniqueValues = [...new Set(continents)];
      return uniqueValues;
    }
  
  
    // to get search value from child
    const searchValue = (search)=>{
      setSearchInput(search)
    }
    // to get filter value form child
    const filterValue = (filter)=>{
      setFilterInput(filter)
    }
    return (
        <>
        <div className="buttonTop" onClick={handleButtonTop}>
          <GoChevronUp className="icon"/>
        </div>
        <div className="container-app">
            <SearchBars
            searchValue={searchValue}
            filterValue={filterValue}
            continents={uniqueContinents()}
            />
            <Countries
            filterValue={filterInput}
            searchValue={searchInput}
            countries={countries}
            />
        </div>
        </>
    );
};

export default Home;
