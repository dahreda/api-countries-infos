import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosReturnLeft } from "react-icons/io";
const Country = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const fetchData = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => {
        let data = res.data;
        setCountry(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickBorderCountries = (code) => {
    let countryName;
    axios
      .get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => {
        countryName = res.data.map((elem) => elem.name.common);
        return countryName;
      })
      .catch((err) => console.log(err))
      .finally(() => {
        navigate(`/countries/${countryName}`);
      });
  };

  useEffect(() => {
    fetchData();
  }, [handleClickBorderCountries]);

  const handleCLickReturn = () => {
    navigate("/countries");
  };

  return (
    <div className="container-app">
      <button className="btn-back" onClick={handleCLickReturn}>
        <IoIosReturnLeft className="icon" />
        return
      </button>

      {country && (
        <div className="country-infos">
          <img className="leftSide" src={country.flags.png} alt="flag" />
          <div className="rightSide">
            <div className="top">
              <p className="country-name">{country.name.common}</p>
              <div className="infos">
                <div className="column">
                  <p className="title">
                    Native name :
                    <span>
                      {
                        country.name.nativeName[
                          Object.keys(country.name.nativeName)[0].toString()
                        ].official
                      }
                    </span>
                  </p>
                  <p className="title">
                    Population : <span>{country.population}</span>
                  </p>
                  <p className="title">
                    Continent : <span>{country.continents}</span>
                  </p>
                  <p className="title">
                    Capital : <span>{country.capital}</span>
                  </p>
                </div>
                <div className="column">
                  <p className="title">
                    Top level domain : <span>{country.tld}</span>
                  </p>
                  <p className="title">
                    Currencies :
                    <span>
                      {
                        country.currencies[
                          Object.keys(country.currencies).toString()
                        ].name
                      }
                    </span>
                  </p>
                  <p className="title">
                    Languages :{" "}
                    <span>{Object.values(country.languages).join(", ")}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <p className="title">
                Border countries :
                <span className="buttons">
                  {country.borders
                    ? country.borders.map((elem, key) => {
                        return (
                          <button
                            onClick={() => handleClickBorderCountries(elem)}
                            key={key}
                          >
                            {elem}
                          </button>
                        );
                      })
                    : "none"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
