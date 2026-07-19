var form = document.getElementById("ticketForm");

form.onsubmit = async function(event){

    event.preventDefault();

    var ticket = {

        id: "TK" + Date.now(),

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        date: document.getElementById("date").value,

        category: document.getElementById("category").value,

        priority: document.getElementById("priority").value,

        issue: document.getElementById("issue").value,

        status: "Pending"

    };

    await fetch("http://localhost:3000/tickets", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(ticket)

    });

    alert("Ticket Submitted Successfully!");

    form.reset();

}

form.onreset = function(){

    alert("Form Cleared.");

}