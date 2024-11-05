let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const messageDisplay = document.getElementById("message")


btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            if (count > 0) {
                count--;
                colorChanger();
                messageShow();
            }
        }       
         else if (styles.contains("increase")){
            count++;

            colorChanger();
            messageShow();
        } 
        else {
            count =0;
            messageShow();
        } 
        value.textContent = count;
       });
});

function messageShow() {
    if (count >= 10 && count <= 19) {
        messageDisplay.innerText = "you have free shipping!";
        messageDisplay.style.color ="green";
        messageDisplay.style.display = "inline";

    } else if (count >= 20) {
        messageDisplay.innerText = "out of stock" ;
        messageDisplay.style.color ="red";


    } else if (count < 10) {
        messageDisplay.innerText = "";
        messageDisplay.style.display = "none";
    }
}

function colorChanger(){
    if(count === 9) {
        document.getElementById("increase").style.backgroundColor = "red";
    } else if (count != 5){
        document.getElementById("increase").style.backgroundColor = "green";

    }else {

    }
}

