const buttons = document.querySelectorAll(".resolveBtn");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        const row = button.parentElement.parentElement;

        const status = row.querySelector(".status");

        status.textContent = "Resolved";

        button.textContent = "Resolved";

        button.disabled = true;

        alert("Ticket marked as Resolved!");

    });

});