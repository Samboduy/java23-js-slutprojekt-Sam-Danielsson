
export function displayPageBtn(pageBtn, pageContainer, pageNumb) {
    pageBtn.innerText = pageNumb;
    pageContainer.append(pageBtn);
}