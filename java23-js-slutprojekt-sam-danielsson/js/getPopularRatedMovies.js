/*gets the most popular or highest rated movies*/
export async function getPopularRatedMovies(btnIdTxt, options) {
  let pageTitleEl = document.getElementById("pageTitle");
  console.log(pageTitleEl)
  if (btnIdTxt == "popular") {
    pageTitleEl.innerText = "Top 10 Most Popular Movies";
  } else {
    pageTitleEl.innerText = "Top 10 Highest Rated Movies";
  }
  const apiUrl = `https://api.themoviedb.org/3/movie/${btnIdTxt}?language=en-US&page=1`;
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  const movieObjectArray = data.results;
  const topTenMovieObjectArray = movieObjectArray.slice(0, 10);
  console.log(topTenMovieObjectArray);
  return topTenMovieObjectArray;
}

