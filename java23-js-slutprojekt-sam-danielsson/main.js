import { getPopularRatedMovies } from "./js/getPopularRatedMovies.js";
import { displayMovie } from "./js/displayMovie.js";
//html element
const topTenRatedBtn = document.getElementById("top_rated")
const topTenPopularBtn = document.getElementById("popular")
const searchForm = document.getElementById("searchForm");
const contentContainer = document.getElementById("contentContainer");
const select = document.querySelector("select");



topTenRatedBtn.addEventListener("click", topTenHandler);
topTenPopularBtn.addEventListener("click", topTenHandler);

//api url endpoints 
const mostPopularUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
// Access Token Object For Auhtentication in TMDB API
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDY5NDM4ZTAxYmJlYTllODMzM2Y2MTgyMzM2OTVlYyIsInN1YiI6IjY2MWZhOTkwN2FlY2M2MDE3YzZjZjc1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TkoJUWZUIp2iMACrhVOU_KEFJUolg1-88wOse2LPobA'
  }
};

displayMovie(await getPopularRatedMovies("popular", options), true, contentContainer);


//
async function topTenHandler(event) {
  event.preventDefault();
  const btnIdTxt = event.target.id;
  console.log(btnIdTxt)
  const array = await getPopularRatedMovies(btnIdTxt, options);

  displayMovie(array, true, contentContainer);
}
function searchHandler(event) {

}


// const words = " Hello Sam Im 23 ";
// words.trim();
// console.log(words.trim().replaceAll(" ", "%20"));




// const select = document.querySelector("select")
//   .value;
//console.log(select);