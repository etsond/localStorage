// if there is no value set it equal to zero

if(!localStorage.getItem("botScore")){
    localStorage.setItem("botScore", 0)
}
// select the button and listen for clicks
document.querySelector("button").addEventListener("click", addAnotherOne)

function addAnotherOne(){
    // get the botScoreVal from the local storage and store it
    let botScoreVal = Number(localStorage.getItem("botScore"))
    //increment it by five
    botScoreVal += 1;
    // setting th botscore
    localStorage.setItem("botScore", botScoreVal)

}
