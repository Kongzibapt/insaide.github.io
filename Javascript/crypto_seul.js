// select elements
let codeTxtL1 = document.getElementById("codeTxtL1")
let codeTxtL2 = document.getElementById("codeTxtL2")
let buttons = document.getElementById("buttons")

let mdp = "Le petit chaperon rouge"
let mdpletters = mdp.replace(/ /g,'').toUpperCase();
let letters = []

console.log(mdpletters);

// functions

function fillCases(div){
    var letterCase = document.createElement("input");
    letterCase.setAttribute("maxlength",1)
    letterCase.style.cssText = "background-color:white; margin:0vw 0.5vw 0vw 0.5vw; width:2.5vw; height:5vh; font-size:1.5vw; text-align:center;border-radius:0.5vw;"
    div.appendChild(letterCase)
    letters.push(letterCase)
}

function fillBlanks(div){
    var spaceCase = document.createElement("div")
    spaceCase.style.cssText = "width:3vw; height:5vh; margin:0vw 0.5vw 0vw 0.5vw; ";
    div.appendChild(spaceCase)
}

function styleMdp() {
    for (let i=0;i<mdp.length;i++){

        if (i > 8){
            if (mdp[i] === ' '){
                fillBlanks(codeTxtL2)
            } else {
                fillCases(codeTxtL2)
            }
        } else {
            if (mdp[i] === ' '){
                fillBlanks(codeTxtL1)
            } else {
                fillCases(codeTxtL1)
            }
        }
        
    }
}

function colorLetters(index){
    for (let i=0;i<letters.length;i++){
        if (mdpletters[i] === mdpletters[index]){
            letters[i].style.cssText = "background-color:#014bac; margin:0vw 0.5vw 0vw 0.5vw; width:2.5vw; height:5vh; font-size:1.5vw; text-align:center;border-radius:0.5vw;"
        }
}
}

function decolorLetters(){
    for (let i=0;i<letters.length;i++){
            letters[i].style.cssText = "background-color:white; margin:0vw 0.5vw 0vw 0.5vw; width:2.5vw; height:5vh; font-size:1.5vw; text-align:center;border-radius:0.5vw;"
    }
}

function changeSameLetters(event,index){
    for (let i=0;i<letters.length;i++){
        if (mdpletters[i] === mdpletters[index]){
            letters[i].value = event.target.value
        }
}
}


function verif(){
    var AllOk = true
    for (let i=0;i<letters.length;i++){
        if (mdpletters[i] === letters[i].value.toUpperCase()){
            letters[i].style.cssText = "background-color:#057B26; margin:0vw 0.5vw 0vw 0.5vw; width:2.5vw; height:5vh; font-size:1.5vw; text-align:center;border-radius:0.5vw;"
        } else {
            letters[i].style.cssText = "background-color:#BF0909; margin:0vw 0.5vw 0vw 0.5vw; width:2.5vw; height:5vh; font-size:1.5vw; text-align:center;border-radius:0.5vw;"
            AllOk = false;
        }
    }
    if (AllOk){
        buttons.children[1].setAttribute("href","reussite.html")
    }
}

function reset(){
    for (let i=0;i<letters.length;i++){
        letters[i].value = null;
    }
}

styleMdp()

// listeners
for (let i=0;i<letters.length;i++){
    letters[i].addEventListener("focus",function(){
        colorLetters(i)
    })
    letters[i].addEventListener("blur",decolorLetters)
    letters[i].addEventListener("change",function(event){
        changeSameLetters(event,i)
    })
}

buttons.children[1].addEventListener("click",verif)
buttons.children[0].addEventListener("click",reset)