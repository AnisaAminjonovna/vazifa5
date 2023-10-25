let text = document.getElementsByClassName("text")
let text2 = document.getElementsByClassName("text2")
let picture = document.getElementsByClassName("picture")
let text5 = document.getElementsByClassName("text5")
let card = document.querySelectorAll(".title .text6")
let card2 = document.querySelectorAll(".content .text7")

function myFunc() {
    for(let i = 0; i < text.length; i++){
        text[i].style.color = "powderblue"
        text[i].style.textShadow = "2px 2px 5px red"
        text[i].style.fontFamily = "Times New Roman";
    }
    
}


function myFunc2() {
    for(let i = 0; i < text2.length; i++){
        text2[i].style.fontSize = "25px"
        text2[i].style.color = "powderblue"
        text2[i].style. borderBottom = "solid rgb(94, 253, 174) 2px"
    }
    
}

function myFunc3(){
    for (let i = 0; i < picture.length; i++) {
        if (i % 2 == 0) {
            picture[i].style.borderRadius = "25px" 
        }else{
            picture[i].style.borderRadius = "50%"
        }
        
    }
}

function myFunc5(){
    for(let i = 0; i < text5.length; i++){
        text5[i].style.color = "peru"
        text5[i].style.textShadow = "2px 2px 5px red"
        text5[i].style.fontFamily = "Times New Roman";
    }
}


function myFunc5(){
    for(let i = 0; i < text5.length; i++){
        text5[i].style.color = "peru"
        text5[i].style.textShadow = "2px 2px 5px red"
        text5[i].style.fontFamily = "Times New Roman";
    }
}

