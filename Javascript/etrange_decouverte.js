// select elements
let buttons = document.getElementById("buttons")
let safeButton = document.getElementById("safeButton");
let boisson = document.getElementById("boisson");
let selectedDrink = document.getElementById("selectedDrink");
let text = document.getElementById("text")
let eyeBlock = document.getElementById("eyeBlock")

let counter_p = 1
let childs = []

console.log(text.childNodes);

selectedDrink.innerText = boisson.value;

//functions
function handleSelectChange(event){
    selectedDrink.innerText = event.target.value;
    boisson.blur()
}

function handleDisplayText(event){
    if (event.keyCode == 32 || event.keyCode == 13){
        if (counter_p < text.childElementCount-1){
            text.children[counter_p].style.cssText = "animation : fade 2s forwards"
            counter_p += 1
        } else {
            text.children[counter_p].children[0].style.cssText = "animation : fade-reverse 2s forwards"
            text.children[counter_p].children[1].style.cssText = "animation : none"
            buttons.style.cssText = "animation : fade 2s forwards"
        }
    }
}

function handleDisplayEye(){
    console.log(eyeBlock.children[0].children[0]);
    eyeBlock.style.cssText = "z-index:1;animation:fade 2s forwards"
    eyeBlock.children[1].style.cssText = "animation: blinking1 1s forwards 1s,blinking2 1s forwards 2s,blinking3 1s forwards 3s"
    eyeBlock.children[0].children[0].style.cssText = "animation:fade 1s forwards 4s"
    eyeBlock.children[2].children[0].style.cssText = "animation:fade 1s forwards 4.5s"

    let audioBaillement = document.createElement("audio");
    audioBaillement.setAttribute("preload", "auto");
    audioBaillement.setAttribute("autoplay", true);
    audioBaillement.setAttribute("src", "../Sounds/baillement_final.mp3");
    audioBaillement.style.cssText = "z-index: -1; opacity: 0;";
    body.appendChild(audioBaillement);
}

//listeners
boisson.addEventListener("change",handleSelectChange)
setInterval(() => {
    document.addEventListener("keypress",handleDisplayText)
}, 1000);
safeButton.addEventListener("click",handleDisplayEye)