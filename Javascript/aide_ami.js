//------------------ Variables ------------------//
let p_counter = 0;
let texts = document.getElementsByClassName("textWillAppear");
let questions = document.getElementsByClassName('questionWillAppear');
let button = document.getElementById("button1");
let friendInput = document.getElementById("friendInput");
let friendPseudo = '';
let inputBox = document.getElementById("inputBox");
let errorMsg = inputBox.childNodes[1];
let buttonBox = document.getElementById("buttons");
let arrow = document.getElementById("arrow");
let space = document.getElementById("space");

let NB_TEXTS = texts.length;
let NB_QUESTIONS = questions.length;
let NB_BUTTONS = 1;
let NB_ELEMENTS_TO_APPEAR = NB_TEXTS + NB_QUESTIONS + NB_BUTTONS;

//------------------ Fonctions ------------------//

//gère les apparitions et disparitions des textes
function makeNextTextAppear(event) {
    if (p_counter < NB_ELEMENTS_TO_APPEAR) {
        if (event.keyCode == 13 || event.keyCode == 32) {
            if(p_counter < 1) {
                texts[p_counter].style.cssText = "animation: fade 2s forwards;";
            }
            if (p_counter >= 1 && p_counter < 5) {
                questions[p_counter-1].style.cssText = "animation: fade 2s forwards;";
            }
            if(p_counter >= 5 && p_counter < 7) {
                texts[p_counter-NB_QUESTIONS].style.cssText = "animation: fade 2s forwards;";
            }
            if(p_counter == 7) {
                button.style.cssText = "animation: fade 2s forwards;";
                arrow.style.cssText = "animation: fade-reverse 2s forwards;"
                space.style.cssText = "animation: fade-reverse 2s forwards;"
            }
            p_counter += 1;
        }
    }
}

function handleInputChange (event) {
    friendPseudo = event.target.value;
    console.log(friendPseudo);
}

//fonction pour gérer le bouton (qui est en fait un lien customisé)
function handleButtonClicked(event) {
    if (friendPseudo) {
        errorMsg.innerHTML = '';
        localStorage.setItem("friendPseudo", friendPseudo);
        button.setAttribute('href', './couloir_ami.html');
        button.click();
    } else {
        //desactive le lien
        button.removeAttribute('href');
        //on enleve l'event listener pour pas pouvoir spam le bouton
        button.removeEventListener("click", handleButtonClicked);
        //faire clignoter le message d'erreur
        let repeater = setInterval(() => {
            friendInput.setAttribute("placeholder", "");
            setTimeout(() => {
                friendInput.setAttribute("placeholder", "Et votre ami ?");
            }, 100);
        }, 200);
        setTimeout(() => {
            clearInterval(repeater);
            button.addEventListener("click", handleButtonClicked);
        }, 1000);
        
    }
}

//------------------ Gestion events ------------------//
//Pour pas faire apparaitre le texte avant que la premiere phrase soit apparue
setTimeout(() => {
    document.addEventListener("keypress", makeNextTextAppear);
}, 2000);
friendInput.addEventListener("input", handleInputChange);
button.addEventListener("click", handleButtonClicked);