//gets movies similar to the selected movie
import { options } from "./apiAuthentication.js";
import { displayError } from "./displayError.js";
export async function getSimilarMovies(movieId, page = 1) {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${page}`
    const response = await fetch(apiUrl, options).catch(displayError);
    if (response.status == 200) {
        const data = await response.json();
        if (data.total_results == 0) {
            throw new Error("Nothing similar, try another movie!")
        } else {
            return data;
        }

    } else {
        throw new Error("something went wrong, try again later")
    }


}