import { displayMovie } from "./displayMovie.js";
import { searchMovieCelebrity } from "./searchMovieCelebrity.js";
import { getSimilarMovies } from "./getSimilarMovies.js";
//gets celebs,movies or similar movies and displays them when the page button is clicked
export async function pageBtnClick(movieOrCeleb = "", query = "", page = 1, movieId = 1, searchBtnClick = true) {

    if (searchBtnClick) {
        const data = await searchMovieCelebrity(movieOrCeleb, query, page);
        if (movieOrCeleb == "movie") {
            displayMovie(data.results, false);
        } else {
            displayCelebrity(data.results)
        }
    } else {
        const data = await getSimilarMovies(movieId, page);
        displayMovie(data.results, false);
    }

}
// export async function pageBtnClickSimilar(movieId, page) {
//     const data = await getSimilarMovies(movieId, page);
//     displayMovie(data.results, false);

// }