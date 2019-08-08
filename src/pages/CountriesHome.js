import React, { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import styled from "styled-components";
const axios = require("axios");

const CountriesGrid = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.bg};
`;

const CountriesGridInner = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function CountriesHome() {
  const [countries, setCountryData] = useState([]);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(res => {
      const countries = res.data;
      setCountryData(countries);
    });
  };

  return (
    <CountriesGrid>
      <CountriesGridInner>
        {countries.map(country => (
          <CountryCard
            name={country.name}
            key={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flag}
          />
        ))}
      </CountriesGridInner>
    </CountriesGrid>
  );
}
