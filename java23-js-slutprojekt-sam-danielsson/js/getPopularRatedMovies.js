import { options } from "./apiAuthentication.js";
/*gets the most popular or highest rated movies*/
export async function getPopularRatedMovies(btnIdTxt) {

  let pageTitleEl = document.getElementById("pageTitle");
  console.log(pageTitleEl)

  if (btnIdTxt == "popular") {
    pageTitleEl.innerText = "Top 10 Most Popular Movies";
  } else {
    pageTitleEl.innerText = "Top 10 Highest Rated Movies";
  }
  const apiUrl = `https://api.themoviedb.org/3/movie/${btnIdTxt}?language=en-US&page=1`;

  const response = await fetch(apiUrl, options);
  if (response.status == 200) {
    const data = await response.json();

    const movieObjectArray = data.results;
    const topTenMovieObjectArray = movieObjectArray.slice(0, 10);
    console.log(topTenMovieObjectArray);

    return topTenMovieObjectArray;
  }
  // if (response.status == 404) {
  //   throw new Error("could not find movie");
  // }
  else {
    throw new Error("Something went wrong, try again later");
  }

}

