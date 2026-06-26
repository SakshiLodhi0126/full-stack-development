const form = document.getElementById("ticketForm");
const message = document.getElementById("message");
const counter = document.getElementById("counter");

message.addEventListener("input", function () {
    counter.textContent = message.value.length + " / 250";
});

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let ticketId = "TK" + Math.floor(Math.random() * 9000 + 1000);

    alert("Ticket Submitted Successfully!\n\nYour Ticket ID is: " + ticketId);

    form.reset();
    counter.textContent = "0 / 250";
});