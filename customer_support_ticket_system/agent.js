// Resolve button

var button = document.getElementById("resolveBtn");

var ticketStatus = document.getElementById("status");

button.onclick = function(){

    ticketStatus.innerHTML = "Resolved";

    ticketStatus.style.color = "green";

}