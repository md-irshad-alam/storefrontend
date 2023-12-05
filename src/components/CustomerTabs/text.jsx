import React, { useState, useEffect } from 'react';

const CountryStateSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  // Fetch countries data on component mount

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          `https://referential.p.rapidapi.com/v1/country?fields=iso_a2&limit=250`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key':
                'eff51e33a2msh3c4977c37096d34p117ce3jsnad1634fb6450',
              'X-RapidAPI-Host': 'referential.p.rapidapi.com',
            },
          }
        );
        const data = await response.json();

        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch states data when the selected country changes
  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry) {
        try {
          const countryCode = selectedCountry.iso_a2;
          console.log(countryCode);
          const response = await fetch(
            `https://referential.p.rapidapi.com/v1/state?iso_a2=${countryCode}`,
            {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key':
                  'eff51e33a2msh3c4977c37096d34p117ce3jsnad1634fb6450',
                'X-RapidAPI-Host': 'referential.p.rapidapi.com',
              },
            }
          );
          const data = await response.json();
          console.log(data);
          setStates(data);
        } catch (error) {
          console.error('Error fetching states:', error);
        }
      }
    };

    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry2) {
        try {
          const countryCode = selectedCountry2.iso_a2;
          console.log(countryCode);
          const response = await fetch(
            `https://referential.p.rapidapi.com/v1/state?iso_a2=${countryCode}`,
            {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key':
                  'eff51e33a2msh3c4977c37096d34p117ce3jsnad1634fb6450',
                'X-RapidAPI-Host': 'referential.p.rapidapi.com',
              },
            }
          );
          const data = await response.json();
          console.log(data);
          setStates2(data);
        } catch (error) {
          console.error('Error fetching states:', error);
        }
      }
    };

    fetchStates();
  }, [selectedCountry2]);

  const handleCountryChange = (event) => {
    const selectedCountry = countries.find(
      (country) => country.value === event.target.value
    );

    setSelectedCountry(selectedCountry);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <label htmlFor='countrySelect'>Select Country:</label>
      <select id='countrySelect' onChange={handleCountryChange}>
        {countries.map((country) => (
          <option key={country.cca2} value={country.value}>
            {country.value}
          </option>
        ))}
      </select>

      <label htmlFor='stateSelect'>Select State:</label>
      <select
        id='stateSelect'
        value={selectedState}
        onChange={handleStateChange}
      >
        {states.length != 0
          ? states.map((state) => (
              <option key={state.key} value={state.value}>
                {state.value}
              </option>
            ))
          : ''}
      </select>
    </div>
  );
};

export default CountryStateSelector;
