import { displayMovie } from "./displayMovie.js";
import { displayCelebrity } from "./displayCelebrity.js";
import { searchMovieCelebrity } from "./searchMovieCelebrity.js";
import { getSimilarMovies } from "./getSimilarMovies.js";
import { displayError } from "./displayError.js";
//gets celebs,movies or similar movies and displays them when the page button is clicked
export async function pageBtnClick(movieOrCeleb = "", query = "", page = 1, movieId = 1, searchBtnClick = true) {

    if (searchBtnClick) {
        const data = await searchMovieCelebrity(movieOrCeleb, query, page).catch(displayError);
        if (typeof data !== "undefined") {
            if (movieOrCeleb == "movie") {
                displayMovie(data.results, false);
            } else {
                displayCelebrity(data.results)
            }
        }

    } else {
        const data = await getSimilarMovies(movieId, page).catch(displayError);
        if (typeof data !== "undefined") {
            displayMovie(data.results, false);
        }
    }

}
// export async function pageBtnClickSimilar(movieId, page) {
//     const data = await getSimilarMovies(movieId, page);
//     displayMovie(data.results, false);

// }