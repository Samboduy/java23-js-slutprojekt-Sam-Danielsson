/*displays title, release date and image of a movie*/
export function displayMovie(movieArray, organisedListTrueFalse, contentContainer) {
    const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
    const organisedListContainer = document.createElement("ol");
    contentContainer.innerHTML = "";
    for (const movie of movieArray) {
        //html
        const movieContainer = document.createElement("div");
        const titleEl = document.createElement("h3");
        const releaseDateEl = document.createElement("p");
        const imgEl = document.createElement("img");

        const title = movie.original_title;
        const releaseDate = `Released:${movie.release_date}`;
        const completeImgUrl = imgBaseUrl + `/${movie.poster_path}`;
        imgEl.src = completeImgUrl;
        titleEl.innerText = title;
        releaseDateEl.innerText = releaseDate;


        if (organisedListTrueFalse) {
            const listContainer = document.createElement("li");
            listContainer.append(titleEl, releaseDateEl, imgEl);
            organisedListContainer.appendChild(listContainer);
            contentContainer.append(organisedListContainer);
        } else {
            movieContainer.append(titleEl, releaseDateEl, imgEl);
            contentContainer.append(movieContainer);
        }
    }
}