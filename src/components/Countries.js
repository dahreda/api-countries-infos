import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Countries = ({countries, searchValue, filterValue}) => {
    const navigate = useNavigate();
    const handleClickCountry = (name) => {
        navigate(`/countries/${name}`)
    }
    return (
        <div className='countries'>
            {
                countries&&countries.filter(elem=>{
                    if(filterValue=="all"){
                        return elem
                    }
                    else{
                        
                        return String(elem.continents)==filterValue
                    }
                }).filter(elem=>{
                    if(searchValue.trim()!==""){
                        return elem.name.common.toLowerCase().includes(searchValue.toLowerCase())
                    }else{
                        return elem
                    }
                }).map((elem,key)=>{
                    return(
                    <div className='country' key={key} onClick={()=>handleClickCountry(elem.name.common)}>
                        <img src={elem.flags.png} alt='flag'/>
                        <div className='bottom'>
                            <p className='title'>{elem.name.common}</p>
                            <p className='infos'>Population : <span>{elem.population}</span></p>
                            <p className='infos'>Continent : <span>{elem.continents}</span></p>
                            <p className='infos'>Capital : <span>{elem.capital}</span></p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Countries