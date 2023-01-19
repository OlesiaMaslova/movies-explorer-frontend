import {SHORTMOVIEDURATION} from './config';

export function getFilterResults(array, value, filterState) {
    let someMovies = array.filter(item => item.nameRU.toLowerCase().includes(value.toLowerCase()) || item.nameEN.toLowerCase().includes(value.toLowerCase()));

    if(filterState) {
        let someShortMovies = someMovies.filter(item => item.duration<SHORTMOVIEDURATION);
        return someShortMovies;
    } 
    return someMovies;
}


export function render(array, count) {
    const newArray = array.slice(0, count);
    return newArray;
}

export function filterByDuration(array, filter) {
    
        let someShortMovies = array.filter(item => item.duration<SHORTMOVIEDURATION);
        return someShortMovies;
  
}
