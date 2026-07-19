async function loadTickets() {

    var response = await fetch("http://localhost:3000/tickets");

    var tickets = await response.json();

    var tableBody = document.getElementById("ticketBody");

    tableBody.innerHTML = "";

    for(var i = 0; i < tickets.length; i++) {

        tableBody.innerHTML += `

        <tr>

            <td>${tickets[i].id}</td>

            <td>${tickets[i].name}</td>

            <td>${tickets[i].category}</td>

            <td>${tickets[i].priority}</td>

            <td>${tickets[i].status}</td>

            <td>
    ${
        tickets[i].status == "Pending"
        ? `<button onclick="resolveTicket('${tickets[i].id}')">Resolve</button>`
        : `<button disabled>Resolved</button>`
    }
</td>

        </tr>

        `;

    }

}

loadTickets();

async function resolveTicket(id){

    await fetch("http://localhost:3000/tickets/" + id, {

        method:"PUT"

    });

    loadTickets();

}