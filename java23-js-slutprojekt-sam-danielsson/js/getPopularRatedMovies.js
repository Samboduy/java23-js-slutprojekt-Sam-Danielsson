export async function getPopularRatedMovies(apiURL, options) {
  const response = await fetch(apiURL, options);
  console.log(response);
  const data = await response.json();
  console.log(data)
  const movieObjectArray = data.results;
  console.log(movieObjectArray);
  const topTenMovieObjectArray = [];
  for (let i = 0; i < 10; i++) {
    topTenMovieObjectArray[i] = movieObjectArray[i];
  }
  console.log(topTenMovieObjectArray);
}