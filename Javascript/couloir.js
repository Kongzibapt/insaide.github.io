// -------------- VARIABLES -------------//
let lienCrypto = document.getElementById("button2");
let body = document.getElementById("body");

// -------------- FUNCTIONS -------------//
function handleLienCryptoClicked() {
    lienCrypto.removeEventListener("click", handleLienCryptoClicked);
    let audioPas = document.createElement("audio");
    audioPas.setAttribute("preload", "auto");
    audioPas.setAttribute("autoplay", true);
    audioPas.setAttribute("src", "../Sounds/pas_insaide.mp3");
    audioPas.style.cssText = "z-index: -1; opacity: 0;";
    body.appendChild(audioPas);    
    body.style.cssText = "animation : fondu 5s forwards";

    setTimeout(() => {
        lienCrypto.setAttribute("href", "./crypto_seul.html");
        lienCrypto.click();
    }, 5000);
}

// --------------- EVENTS ---------------//
lienCrypto.addEventListener("click", handleLienCryptoClicked);