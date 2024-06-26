import { getSimilarMovies } from "./getSimilarMovies.js"
import { displayMovie } from "./displayMovie.js";
import { displayPageBtn } from "./displayPageBtn.js";
import { displayError } from "./displayError.js";
export async function similarMoviesListener(movieId, title, releaseDate, movieImg, description) {
    //html
    let pageTitleEl = document.getElementById("pageTitle");
    const pageContainer = document.getElementById("pageContainer");
    const originalMovieDivEl = document.createElement("div");
    const originalSimilarMovieContainerEl = document.getElementById("orginial-similar-movie");

    pageContainer.classList.remove("hide");
    pageContainer.classList.add("pageCont");
    pageContainer.innerHTML = "";
    pageTitleEl.innerText = `similar movies to: ${title.innerText}`;

    originalSimilarMovieContainerEl.innerHTML = "";
    originalMovieDivEl.append(title, releaseDate, movieImg, description);
    originalSimilarMovieContainerEl.append(originalMovieDivEl);
    const data = await getSimilarMovies(movieId).catch(displayError);

    if (typeof data !== "undefined") {
        displayMovie(data.results, false);
        let totalPages = data.total_pages;
        //creates navigation buttons 
        if (totalPages > 1) {

            if (totalPages > 499) {
                totalPages = 500;
                displayPageBtn(totalPages, "", "", movieId, false);
            } else {
                displayPageBtn(totalPages, "", "", movieId, false);
            }
        }
    }
}