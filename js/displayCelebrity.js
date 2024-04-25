// displays a celebritys name, picture,what industry the celeb is known for and what tv show or movie the celeb is most known for
export function displayCelebrity(celebArray) {
    const imgBaseUrl = "https://image.tmdb.org/t/p/w200";
    const contentContainer = document.getElementById("contentContainer");

    contentContainer.innerHTML = "";
    for (const celeb of celebArray) {
        //html
        const organisedListContainer = document.createElement("ol");
        const celebContainer = document.createElement("div");
        const imgEl = document.createElement("img")
        const nameEl = document.createElement("h3");
        const knownForDepartEl = document.createElement("p");
        const famousForEl = document.createElement("h4");


        let completeImgUrl;
        //changes picture to a anonymous pic if there is no picture of the celeb
        if (celeb.profile_path == null) {
            completeImgUrl = "data:image/png;base64,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";
        } else {
            completeImgUrl = imgBaseUrl + `/${celeb.profile_path}`;
        }

        const knownFor = celeb.known_for;

        //gets the tv show of movie that the celeb is most known for
        for (const medium of knownFor) {
            const listContainerEl = document.createElement("li");
            const titleEl = document.createElement("p");
            if (medium.media_type == "movie") {
                titleEl.innerText = `Movie: ${medium.title}`;
            } else {
                titleEl.innerText = `tv: ${medium.name}`;
            }
            listContainerEl.append(titleEl);
            organisedListContainer.appendChild(listContainerEl)
        }
        famousForEl.innerText = "Most famous for";
        knownForDepartEl.innerText = `known for: ${celeb.known_for_department}`;
        nameEl.innerText = celeb.name;
        celebContainer.append(nameEl, imgEl, knownForDepartEl, famousForEl, organisedListContainer);
        imgEl.src = completeImgUrl

        contentContainer.append(celebContainer);

    }
}