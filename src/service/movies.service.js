// import { toast } from "react-toastify";

const KEY = '2f8537b05bdc07092fd610b26ad67dbe';
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = () => {
    return fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY}`)
        .then(response => {
            return response.json();
   })
}

export const getMoviesByQuery = (query) => {
    return fetch(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=true`)
        .then(response => {
            return response.json();
   })
}

export const getMovieDetails = (id) =>{
    return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`)
        .then(response => {
            return response.json();
   })
}

export const getMovieCast = (id) =>{
    return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`)
        .then(response => {
            return response.json();
   })
}

export const getMovieReviews = (id) =>{
    return fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
        .then(response => {
            return response.json();
   })
}

