import { getPopularRatedMovies } from "./js/getPopularRatedMovies.js";
import { displayMovie } from "./js/displayMovie.js";
import { searchMovieCelebrity } from "./js/searchMovieCelebrity.js";
//html element
const topTenRatedBtn = document.getElementById("top_rated");
const topTenPopularBtn = document.getElementById("popular");
const searchForm = document.getElementById("searchForm");
const contentContainer = document.getElementById("contentContainer");
const select = document.querySelector("select");
const allOptionEl = document.querySelectorAll("option");
const userQuery = document.querySelector("input");



topTenRatedBtn.addEventListener("click", topTenHandler);
topTenPopularBtn.addEventListener("click", topTenHandler);
searchForm.addEventListener("submit", searchHandler)

displayMovie(await getPopularRatedMovies("popular"), true, contentContainer);


async function topTenHandler(event) {
  event.preventDefault();
  contentContainer.innerHTML = "";
  const btnIdTxt = event.target.id;
  console.log(btnIdTxt)
  const array = await getPopularRatedMovies(btnIdTxt);

  displayMovie(array, true, contentContainer);
}
async function searchHandler(event) {
  contentContainer.innerHTML = "";
  event.preventDefault();
  const optionsIndex = select.options.selectedIndex;
  const optionId = allOptionEl[optionsIndex].id;
  const fixedQuery = userQuery.value.trim().replaceAll(" ", "%20").toLowerCase();
  console.log(fixedQuery);
  let data = await searchMovieCelebrity(optionId, fixedQuery, 1);
  displayMovie(data.results, false,)
  if (data.total_pages > 1) {
    for (let i = 2; i < data.total_pages + 1; i++)
      data = await searchMovieCelebrity(optionId, fixedQuery, i);
    displayMovie(data.results, false,);
  }
}


// const words = " Hello Sam Im 23 ";
// words.trim();
// console.log(words.trim().replaceAll(" ", "%20"));




// const select = document.querySelector("select")
//   .value;
//console.log(select);