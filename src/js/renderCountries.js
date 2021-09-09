
import countriesListTps from '../templates/countries-list-tps.hbs';
import countryCardTps from '../templates/countries-tps.hbs';
import { alert } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import refs from '../js/refs';


function renderCountries (country) {
    
    refs.container.innerHTML = '';
    if (country.length > 10) {
        alert({
                text: 'Too many matches found! Please enter a more specific query!'
        })
    };
    if (country.length < 10 && country.length > 2) {
        const markUpCountries = countriesListTps(country);            
        refs.container.insertAdjacentHTML('afterbegin', markUpCountries);   
    };
    if (country.length === 1) {
        const markUpCountry = countryCardTps(country);    
        refs.container.insertAdjacentHTML('afterbegin', markUpCountry);
    };       
};

export default renderCountries;

