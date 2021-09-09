
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries.js';
import refs from './js/refs.js';
import renderCountries from './js/renderCountries.js';
import './sass/main.scss';


refs.input.addEventListener('input', debounce(onFetchCountry), 500);


async function onFetchCountry(e) {
    try {
        e.preventDefault();
        const searchQuery = refs.input.value;
        const countries = await fetchCountries(searchQuery);
        const render = await renderCountries(countries);
        return render;
    } catch (error) {
        console.log(error);
    }
  
};


