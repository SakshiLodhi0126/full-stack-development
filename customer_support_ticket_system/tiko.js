const heading = document.querySelector(".main h1");

const options = document.querySelectorAll(".option");

options.forEach(function(option){

    option.addEventListener("click", function(){

        const title = option.querySelector("h2").innerText;

        if(title === "Open Portal"){
            heading.innerText = "Customer Portal Selected";
        }
        else{
            heading.innerText = "Agent Workspace Selected";
        }

    });

});