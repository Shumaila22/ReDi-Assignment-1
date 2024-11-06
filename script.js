let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const messageDisplay = document.getElementById("message");
/*
Good use of `let` and `const`.
let is correctly used for count because its value is being updated.
const is correctly used for value, btns, and messageDisplay because these are references to DOM elements, 
and you're not reassigning these variables.
*/

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      if (count > 0) {
        count--;
        colorChanger();
        messageShow();
      }
    } else if (styles.contains("increase")) {
      count++;

      colorChanger();
      messageShow();
    } else {
      count = 0;
      messageShow();
    }
    value.textContent = count;
  });
});
/*
You're using forEach correctly, which is great! 
To keep things focused on practicing the basics of functions, 
you might consider separating the increase and decrease actions into individual functions. 
This can help simplify things while you're strengthening your understanding of functions. 
Once you're comfortable with those, you can explore using forEach more easily. 
Keep up the good work!
*/

function messageShow() {
  if (count >= 10 && count <= 19) {
    messageDisplay.innerText = "you have free shipping!";
    messageDisplay.style.color = "green";
    messageDisplay.style.display = "inline";
  } else if (count >= 20) {
    messageDisplay.innerText = "out of stock";
    messageDisplay.style.color = "red";
  } else if (count < 10) {
    messageDisplay.innerText = "";
    messageDisplay.style.display = "none";
  }
}

function colorChanger() {
  // Background color of increase button turns to red when count is equal to 9
  if (count === 9) {
    document.getElementById("increase").style.backgroundColor = "red";
  } else if (count != 5) {
    document.getElementById("increase").style.backgroundColor = "green";
    // Background color of increase button is set to green when count is not equal to 5
    // If count is 5, nothing happens because there's no specific action for that condition in this part of the code.
  } else {
  }
  /*
  The empty else block doesn't perform any action. 
  It might be a good idea to remove it entirely to clean up the code.
  */

  // Change the ‘+’ button’s background to red whenever the counter reaches 20
}
