import { pageBtnClick } from "./pageButtonClickHandler.js";
//displays page buttons for the user to navigate to other pages of content 
export function displayPageBtn(totalBtnsNumber, movieOrCeleb, query, movieId = 1, searchBtnClick) {
    //html 
    const pageContainer = document.getElementById("pageContainer");
    const pageLabelEl = document.createElement("label");
   
    pageLabelEl.innerText = "page:";
    pageContainer.append(pageLabelEl);
    
    for (let i = 1; i < totalBtnsNumber + 1; i++) {
        
        const pageBtn = document.createElement("button");
        pageBtn.innerText = i;
        
        if (searchBtnClick) {
            pageBtn.addEventListener("click", event => {
                pageBtnClick(movieOrCeleb, query, i, movieId, searchBtnClick)
            });
            pageContainer.append(pageBtn);
        } else {
            pageBtn.addEventListener("click", event => {
                pageBtnClick("", "", i, movieId, searchBtnClick)
            });
            pageContainer.append(pageBtn);
        }

    }
}