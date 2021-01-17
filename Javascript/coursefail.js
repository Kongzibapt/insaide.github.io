// select elements
let buttons = document.getElementById("buttons")
let text = document.getElementById("text")

let counter_p = 1
let childs = []



function handleDisplayText(event){
    if (event.keyCode == 32 || event.keyCode == 13){
        if (counter_p < text.childElementCount-1){
            text.children[counter_p].style.cssText = "animation : fade 2s forwards"
            counter_p += 1
        } else {
            text.children[counter_p].children[0].style.cssText = "animation : fade-reverse 1s forwards"
            text.children[counter_p].children[1].style.cssText = "animation : none"
            buttons.style.cssText = "animation : fade 2s forwards"
        }
    }
}


document.addEventListener("keypress",handleDisplayText)