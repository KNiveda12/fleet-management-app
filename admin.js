const fleets = [];
    function fleet() {
        const regno = document.getElementById("regno").value;
        const vehicles = document.getElementById("vehicles").value;
        const name = document.getElementById("name").value;
        const options = document.getElementById("options").value;

        const fleet = {
            regno,
            vehicles,
            name,
            options
        };

        fleets.push(fleet);
        renderFleets(fleets);
    }
    function renderFleets(data) {
        const grid = document.getElementById("grid");
        grid.innerHTML="";
        data.forEach((fleet,i) => {
            const card = document.createElement("div")
            card.className = "card";
            card.innerHTML = `
        
            <img src = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png" width = "100px"></img>
            <h4>Reg No of Vehicle: ${fleet.regno}</h4>
            <h4>Driver Name: ${fleet.name}</h4>
            <p>Category: ${fleet.vehicles}</p>
            <p>Availability Status: ${fleet.options}</p>
            <button onclick="update(this)" id = "btn1">Update Driver</button>
            <button onclick="changeStatus(this)" id = "btn2">Change Availability</button>
            <button onclick="deletes(${i})">Delete</button>
            
            `;
            grid.appendChild(card);

        })


    }
    ///////// Delete Operation /////////

    function deletes(i) {
        fleets.splice(i,1);
        renderFleets(fleets);
    }

    ///////// Update operation ////////////

    function update(btn) {
        const text = btn.getElementById("btn1");
        const newText = prompt("Enter new Driver Name: ",text.innerHTML);
        if(newText) {
            text.innerHTML = newText;
        }

    }



    ////////// change availbility ////////
    function changeStatus(btn) {
        const opt = btn.getElementById("btn2");
        document.classList.toggle("Available");
    }

