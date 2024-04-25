// shows the buttons to change page
export function displayPageBtn(pageBtn, pageContainer, pageNumb) {
    pageBtn.innerText = pageNumb;
    pageContainer.append(pageBtn);
}