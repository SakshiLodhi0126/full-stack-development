// Resolve button

var button = document.getElementById("resolveBtn");

var status = document.getElementById("status");

button.onclick = function(){

    status.innerHTML = "Resolved";

    status.style.color = "green";

}