 const BASE_URL = 'https://restcountries.eu';

 async function fetchCountries(searchQuery) {
    const name = searchQuery;    
    const response = await fetch(`${BASE_URL}/rest/v2/name/${name}`)
    const result = await response.json();
    return result;
        
}

export default fetchCountries;


// const BASE_URL = 'https://restcountries.eu';

// function fetchCountries(searchQuery) {
//     const name = searchQuery;    
//     return fetch(`${BASE_URL}/rest/v2/name/${name}`)
//     .then(response => response.json());
   
// }

// export default fetchCountries;

        
