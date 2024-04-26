export function displayError(error) {
    //html
    const contentContainer = document.getElementById("contentContainer");
    const pageContainer = document.getElementById("pageContainer");

    pageContainer.innerHTML = "";
    contentContainer.innerHTML = "";
    const errorMessageEl = document.createElement("h1");

    if (error.message == "response is undefined") {
        errorMessageEl.innerText = "something went wrong, try again later";
    } else {
        errorMessageEl.innerText = error.message;
    }

    console.log("inside displayError");
    contentContainer.append(errorMessageEl);
}
