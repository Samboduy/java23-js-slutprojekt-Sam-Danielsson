//gets movies similar to the selected movie
import { options } from "./apiAuthentication.js";
export async function getSimilarMovies(movieId, page = 1) {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${page}`
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    return data;
}