
import debounce from 'lodash.debounce';
// import countriesListTps from './templates/countries-list-tps.hbs';
// import countryCardTps from './templates/countries-tps.hbs';
// import { alert } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/BrightTheme.css';
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


