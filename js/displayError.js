//Displays a error message for the user to see
export function displayError(error) {
    //html
    const contentContainer = document.getElementById("contentContainer");
    const pageContainer = document.getElementById("pageContainer");
    const similarMovieContainer = document.getElementById("orginial-similar-movie");

    pageContainer.innerHTML = "";
    contentContainer.innerHTML = "";
    similarMovieContainer.innerHTML = "";
    const errorMessageEl = document.createElement("h1");

    if (error.message == "response is undefined") {
        errorMessageEl.innerText = "something went wrong, try again later";
    } else {
        errorMessageEl.innerText = error.message;
    }

    console.log("inside displayError");
    contentContainer.append(errorMessageEl);
}
