// select elements
let pseudoInput = document.getElementById("pseudoInput")
let errorTxt = document.getElementById("errorTxt")
let button = document.getElementById("button")
let pseudo = ""

//functions

function initPseudoInput(){
    pseudoInput.value = ""
}

function initError(){
    errorTxt.innerText = ""
}

function handleNavigation(event){
    if (pseudo){
        initError();
        button.childNodes[1].setAttribute("href","HTML/etrange_decouverte.html")
        localStorage.setItem("pseudo",pseudo);
        button.childNodes[1].click()
    } else {
        button.childNodes[1].removeAttribute("href")
        errorTxt.innerText = "Veuillez rentrer un pseudo svp"
    }
}

function handleEnterPressed(event){
    if (event.keyCode == 13){
        pseudo = pseudoInput.value;
        handleNavigation();
    }
}

function handlePseudoChange(event){
    pseudo = event.target.value;
    console.log(pseudo);
}

initPseudoInput();
initError();

// event listeners
pseudoInput.addEventListener("change",handlePseudoChange)
pseudoInput.addEventListener("keypress",handleEnterPressed)
button.addEventListener("click",handleNavigation)
