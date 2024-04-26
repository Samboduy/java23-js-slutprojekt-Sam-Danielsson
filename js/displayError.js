export function displayError(error) {
    const contentContainer = document.getElementById("contentContainer");
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
