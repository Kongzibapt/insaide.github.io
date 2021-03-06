//------------------ Variables ------------------//
let p_counter = 0;
let texts = document.getElementsByClassName("textWillAppear");
let buttonBox = document.getElementById("buttons");
let arrow = document.getElementById("arrow");
let space = document.getElementById("space");

console.log(texts)

let NB_TEXTS = texts.length;
let NB_BUTTONS = 1;
let NB_ELEMENTS_TO_APPEAR = NB_TEXTS + NB_BUTTONS;


//gère les apparitions et disparitions des textes
function makeNextTextAppear(event) {
    if (p_counter < NB_ELEMENTS_TO_APPEAR) {
        if (event.keyCode == 13 || event.keyCode == 32) {
            if(p_counter < NB_TEXTS) {
                texts[p_counter].style.cssText = "animation: fade 2s forwards;";
            }
            else {
                buttonBox.style.cssText = "animation: fade 2s forwards;";
                arrow.style.cssText = "animation: fade-reverse 1s forwards;";
                space.style.cssText = "animation: fade-reverse 1s forwards;";
            }
            p_counter += 1;
        }
    }
}

//------------------ Gestion events ------------------//
document.addEventListener("keypress", makeNextTextAppear);