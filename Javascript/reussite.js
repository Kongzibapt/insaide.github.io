// -------------- VARIABLES -------------//*
p = document.getElementById("p1");
body = document.getElementById("body");
texts = [
    "Vous voyez beaucoup de personnes, des étudiants majoritairement, mais aussi des professeurs, attablés et joyeux, ils ont l'air de prendre du bon temps si vous voyez ce que je veux dire",
    "Cet endroit vous rappelle les Speakeasy, ce genre de bars clandestins en Amérique",
    "Vous avez un sentiment bizarre, vous êtes entrés effrayé.e et êtes maintenant rassuré.e. L'ambiance vous a rendu.e jovial.e",
    "Vous seriez-vous joint à la fête ? On vous laisse y réfléchir...",
    "Merci d'avoir joué"
];
let i = 0;
let imax = texts.length;
// -------------- FUNCTIONS -------------//*ù
function fadeoutp() {
    p.style.cssText = "animation: fadeout 2s forwards";
}
function fadeinp() {
    p.style.cssText = "animation: fadein 2s forwards";
}

let repeater = setInterval(() => {
    fadeoutp();
    setTimeout(() => {
        p.innerHTML = texts[i];
        if (i==0) {
            setTimeout(() => {
                let audioSE = document.createElement("audio");
                audioSE.setAttribute("preload", "auto");
                audioSE.setAttribute("autoplay", true);
                audioSE.setAttribute("src", "../Sounds/fin.mp3");
                audioSE.style.cssText = "z-index: -1; opacity: 0;";
                body.appendChild(audioSE);
            }, 1500);
        }
        if (i < imax-1) {
            i++;
        } else {
            clearInterval(repeater);
        }
        fadeinp();
    }, 2000);
}, 8000);

// --------------- EVENTS ---------------//*