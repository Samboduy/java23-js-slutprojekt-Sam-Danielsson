import { options } from "./apiAuthentication.js";
import { displayError } from "./displayError.js";
//Gets the 1 first page of what the user searched for, depending on if its a movie or a person
export async function searchMovieCelebrity(movieOrCeleb, query, page = 1) {
    let apiUrl;
    if (movieOrCeleb == "person") {
        apiUrl = `https://api.themoviedb.org/3/search/${movieOrCeleb}?query=${query}%20&include_adult=false&language=en-US&page=${page}`;
    }
    else {
        apiUrl = `https://api.themoviedb.org/3/search/${movieOrCeleb}?query=${query}&include_adult=false&language=en-US&page=${page}`;
    }
    const response = await fetch(apiUrl, options).catch(displayError);

    if (response.status == 200) {
        const data = await response.json();

        if (data.total_results == 0) {
            throw new Error(`No Results for:${query}`);
        } else {
            console.log(data);
            return data;
        }
    } else {
        throw new Error("something went wrong, try again later");
    }


}