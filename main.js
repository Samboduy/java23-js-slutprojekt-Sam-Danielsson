
import { getPopularRatedMovies } from "./js/getPopularRatedMovies.js";
import { displayMovie } from "./js/displayMovie.js";
import { searchMovieCelebrity } from "./js/searchMovieCelebrity.js";
import { displayPageBtn } from "./js/displayPageBtn.js";
import { displayCelebrity } from "./js/displayCelebrity.js";

//html element
const pageContainer = document.getElementById("pageContainer");
const topTenRatedBtn = document.getElementById("top_rated");
const topTenPopularBtn = document.getElementById("popular");
const searchForm = document.getElementById("searchForm");
const contentContainer = document.getElementById("contentContainer");
const selectEl = document.querySelector("select");
const userQueryEl = document.querySelector("input");
const pageLabelEl = document.createElement("label");
let pageTitleEl = document.getElementById("pageTitle");
const originalSimilarMovieContainer = document.getElementById("orginial-similar-movie");


//Change css styling
pageContainer.classList.remove("pageCont");
pageContainer.classList.add("hide");


topTenRatedBtn.addEventListener("click", topTenHandler);
topTenPopularBtn.addEventListener("click", topTenHandler);
searchForm.addEventListener("submit", searchHandler)

//Shows most popular movies when you enter the site
displayMovie(await getPopularRatedMovies("popular").catch(error => console.log(error.message)), true, contentContainer);

//handles if you click on top ten rated/popular movies, requests the movies and then shows the movies
async function topTenHandler(event) {
  event.preventDefault();
  //hides page buttons
  pageContainer.classList.remove("pageCont");
  pageContainer.classList.add("hide");

  originalSimilarMovieContainer.innerHTML = "";

  const btnIdTxt = event.target.id;
  console.log(btnIdTxt);
  if (btnIdTxt == "popular") {
    pageTitleEl.innerText = "Top 10 Most Popular Movies";
  } else {
    pageTitleEl.innerText = "Top 10 Highest Rated Movies";
  }
  console.log(btnIdTxt)
  const array = await getPopularRatedMovies(btnIdTxt).catch(error => console.log(error.message));

  displayMovie(array, true, contentContainer);
}

// handles when the user searches for a movie/person and requests what the user searched for and displays it
async function searchHandler(event) {
  //shows page buttons
  event.preventDefault();
  pageContainer.classList.remove("hide");
  pageContainer.classList.add("pageCont");

  originalSimilarMovieContainer.innerHTML = "";

  const movieOrCeleb = selectEl.value;
  console.log(movieOrCeleb)

  const query = userQueryEl.value.trim().replaceAll(" ", "%20").toLowerCase();
  console.log(query);


  let data;
  if (movieOrCeleb == "movie") {
    pageTitleEl.innerText = "Movies"
    data = await searchMovieCelebrity(movieOrCeleb, query);
    displayMovie(data.results, false)
  }
  else {
    pageTitleEl.innerText = "Celebrities"
    data = await searchMovieCelebrity(movieOrCeleb, query);
    console.log(data.results);
    displayCelebrity(data.results);
  }


  pageContainer.innerHTML = "";
  const totalPages = data.total_pages;
  //creates buttons  for the user to navigate to other pages of content
  if (totalPages > 1) {
    displayPageBtn(totalPages, movieOrCeleb, query, 1, true)
  }
}
