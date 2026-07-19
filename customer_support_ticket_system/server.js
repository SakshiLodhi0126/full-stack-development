const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

const filePath = path.join(__dirname, "data", "tickets.json");

// GET all tickets
app.get("/tickets", (req, res) => {

    const data = fs.readFileSync(filePath);

    res.json(JSON.parse(data));

});

// POST new ticket
app.post("/tickets", (req, res) => {

    const tickets = JSON.parse(fs.readFileSync(filePath));

    tickets.push(req.body);

    fs.writeFileSync(filePath, JSON.stringify(tickets, null, 2));

    res.json({
        message: "Ticket Added Successfully"
    });

});

app.put("/tickets/:id", (req, res) => {

    var tickets = JSON.parse(fs.readFileSync(filePath));

    for(var i = 0; i < tickets.length; i++){

        if(tickets[i].id == req.params.id){

            tickets[i].status = "Resolved";

        }

    }

    fs.writeFileSync(filePath, JSON.stringify(tickets, null, 2));

    res.json({

        message:"Ticket Updated"

    });

});

app.listen(3000, () => {

    console.log("Server Started on http://localhost:3000");

});