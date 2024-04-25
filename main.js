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
  //hides page buttons
  event.preventDefault();
  pageContainer.classList.remove("pageCont");
  pageContainer.classList.add("hide");


  const btnIdTxt = event.target.id;
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
  //
  if (data.total_pages > 1) {
    pageLabelEl.innerText = "page:";
    pageContainer.append(pageLabelEl)

    for (let i = 1; i < data.total_pages + 1; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.addEventListener("click", event => { pageBtnClick(movieOrCeleb, query, i) });
      displayPageBtn(pageBtn, pageContainer, i);
    }
  }
}

async function pageBtnClick(movieOrCeleb, query, page) {
  let data = await searchMovieCelebrity(movieOrCeleb, query, page);
  if (movieOrCeleb == "movie") {
    displayMovie(data.results, false);
  } else {
    displayCelebrity(data.results)
  }

}


// const words = " Hello Sam Im 23 ";
// words.trim();
// console.log(words.trim().replaceAll(" ", "%20"));




// const select = document.querySelector("select")
//   .value;
//console.log(select);