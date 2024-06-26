import { options } from "./apiAuthentication.js";
import { displayError } from "./displayError.js";
/*gets the most popular or highest rated movies*/
export async function getPopularRatedMovies(btnIdTxt) {

  let pageTitleEl = document.getElementById("pageTitle");

  if (btnIdTxt == "popular") {
    pageTitleEl.innerText = "Top 10 Most Popular Movies";
  } else {
    pageTitleEl.innerText = "Top 10 Highest Rated Movies";
  }
  const apiUrl = `https://api.themoviedb.org/3/movie/${btnIdTxt}?language=en-US&page=1`;

  const response = await fetch(apiUrl, options).catch(displayError);
  if (response.status == 200) {
    const data = await response.json();

    const movieObjectArray = data.results;
    const topTenMovieObjectArray = movieObjectArray.slice(0, 10);

    return topTenMovieObjectArray;
  } else {
    throw new Error("Something went wrong, try again later");
  }

}

