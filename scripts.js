/* Add your JavaScript to this file */

function onclickSubmit(event){

    let emailAdr= document.getElementById("email").value;
    let message = "Please enter a valid email address.";

    if(emailAdr){
      message = "Thank you! Your email address &lt;"+ emailAdr + "&gt; has been added to our mailing list!";
    }
    document.querySelector("div.message").innerHTML = "<i>"+message+"</i>";
    event.stopPropagation();
    event.preventDefault();
}

window.onload = function() {
    let elementBtn= document.querySelector(".newsletter .btn");

    elementBtn.addEventListener("click", onclickSubmit);
}
