//------------------ Variables ------------------//
let p_counter = 0;
let body = document.getElementById("body");
let texts = document.getElementsByClassName("textWillAppear");
let buttonBox = document.getElementById("buttons");
let abortButton = document.getElementById("button1");
let lienCrypto = document.getElementById("button2");
let arrow = document.getElementById("arrow");
let space = document.getElementById("space");
let nomAmi = document.getElementsByClassName("nomAmi");

let NB_TEXTS = texts.length;
let NB_BUTTONS = 1;
let NB_ELEMENTS_TO_APPEAR = NB_TEXTS + NB_BUTTONS;

//------------------ Fonctions ------------------//
for (let span in nomAmi) {
    nomAmi[span].innerHTML = localStorage.getItem('friendPseudo');
}
//gère les apparitions et disparitions des textes
function makeNextTextAppear(event) {
    if (p_counter < NB_ELEMENTS_TO_APPEAR) {
        if (event.keyCode == 13 || event.keyCode == 32) {
            if(p_counter < NB_TEXTS) {
                texts[p_counter].style.cssText = "animation: fade 2s forwards;";
            }
            else {
                buttonBox.style.cssText = "animation: fade 2s forwards;";
                arrow.style.cssText = "animation: fade-reverse 2s forwards;";
                space.style.cssText = "animation: fade-reverse 2s forwards;";
            }
            p_counter += 1;
        }
    }
}

function handleLienCryptoClicked() {
    //suppression des boutons
    let savebutton2 = button2;
    buttons.removeChild(button1);
    buttons.removeChild(button2);

    //Création et ajout de l'audio
    let audioPas = document.createElement("audio");
    audioPas.setAttribute("preload", "auto");
    audioPas.setAttribute("autoplay", true);
    audioPas.setAttribute("src", "../Sounds/pas_insaide.mp3");
    audioPas.style.cssText = "z-index: -1; opacity: 0;";
    body.appendChild(audioPas);    
    body.style.cssText = "animation : fondu 5s forwards";
    
    setTimeout(() => {
        buttons.appendChild(savebutton2);
        lienCrypto.setAttribute("href", "./crypto_seul.html");
        lienCrypto.click();
    }, 5000);
}

function handleAbort() {
    body.style.cssText = "animation : fondu 5s";
    setTimeout(() => {
        while (body.childNodes[0] != undefined) {
            body.removeChild(body.childNodes[0]);
        }
        let newMain = document.createElement("main");
            let newText = document.createElement("p");
                newText.innerHTML = "Tu as abandonné";
            let newLink = document.createElement("a");
                newLink.setAttribute("href", "../index.html");
                newLink.innerHTML = "Recommencer l'aventure";
        newMain.appendChild(newText);
        newMain.appendChild(newLink);
        body.appendChild(newMain);

        newMain.style.cssText = "display: flex; flex-direction: column; height: 80vh; justify-content: center; align-items: center;";

        newText.style.cssText = "font-size: 4vw;";

        newLink.style.cssText = "text-decoration: none; font-size: 1vw; color: #494949;";

    }, 5000);
}

//------------------ Gestion events ------------------//
lienCrypto.addEventListener("click", handleLienCryptoClicked);
abortButton.addEventListener("click", handleAbort);
document.addEventListener("keypress", makeNextTextAppear);