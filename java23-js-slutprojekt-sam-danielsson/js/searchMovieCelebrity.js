import { options } from "./apiAuthentication.js";
export async function searchMovieCelebrity(optionIdTxt, query, page) {
    const apiUrl = `https://api.themoviedb.org/3/search/${optionIdTxt}?query=${query}&include_adult=false&language=en-US&page=${page}`;
    const response = await fetch(apiUrl, options);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}