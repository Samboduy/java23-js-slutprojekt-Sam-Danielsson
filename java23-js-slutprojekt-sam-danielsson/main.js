import { getPopularRatedMovies } from "./js/getPopularRatedMovies.js";
import { displayMovie } from "./js/displayMovie.js";
import { searchMovieCelebrity } from "./js/searchMovieCelebrity.js";
import { displayPageBtn } from "./js/displayPageBtn.js";

//html element
const pageContainer = document.getElementById("pageContainer");
const topTenRatedBtn = document.getElementById("top_rated");
const topTenPopularBtn = document.getElementById("popular");
const searchForm = document.getElementById("searchForm");
const contentContainer = document.getElementById("contentContainer");
const selectEl = document.querySelector("select");
const userQueryEl = document.querySelector("input");

//Change css styling
pageContainer.classList.remove("pageCont");
pageContainer.classList.add("hide");


topTenRatedBtn.addEventListener("click", topTenHandler);
topTenPopularBtn.addEventListener("click", topTenHandler);
searchForm.addEventListener("submit", searchHandler)

displayMovie(await getPopularRatedMovies("popular"), true, contentContainer);


async function topTenHandler(event) {
  pageContainer.classList.remove("pageCont");
  pageContainer.classList.add("hide");
  event.preventDefault();
  const btnIdTxt = event.target.id;
  console.log(btnIdTxt)
  const array = await getPopularRatedMovies(btnIdTxt);

  displayMovie(array, true, contentContainer);
}

async function searchHandler(event) {

  pageContainer.classList.remove("hide");
  pageContainer.classList.add("pageCont");
  event.preventDefault();

  const movieOrCeleb = selectEl.value;
  console.log(movieOrCeleb)

  const query = userQueryEl.value.trim().replaceAll(" ", "%20").toLowerCase();
  console.log(query);


  let data = await searchMovieCelebrity(movieOrCeleb, query);

  displayMovie(data.results, false)

  //shows page buttons 
  if (data.total_pages > 1) {
    for (let i = 1; i < data.total_pages + 1; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.addEventListener("click", event => { pageBtnClick(movieOrCeleb, query, i) });
      displayPageBtn(pageBtn, pageContainer, i);
    }
  }
}

async function pageBtnClick(movieOrCeleb, query, page) {
  let data = await searchMovieCelebrity(movieOrCeleb, query, page);

  displayMovie(data.results, false);
}


// const words = " Hello Sam Im 23 ";
// words.trim();
// console.log(words.trim().replaceAll(" ", "%20"));




// const select = document.querySelector("select")
//   .value;
//console.log(select);