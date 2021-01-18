// -------------- VARIABLES -------------//
let lienCrypto = document.getElementById("button2");
let button1 = document.getElementById("button1");
let buttons = document.getElementById("buttons");
let body = document.getElementById("body");

// -------------- FUNCTIONS -------------//
function handleLienCryptoClicked() {
    //suppression des boutons
    let savebutton2 = button2;
    buttons.removeChild(button1);
    buttons.removeChild(button2);

    //lienCrypto.removeEventListener("click", handleLienCryptoClicked);

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

// --------------- EVENTS ---------------//
lienCrypto.addEventListener("click", handleLienCryptoClicked);