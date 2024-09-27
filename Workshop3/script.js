
function a () {
    alert("You clicked me! " + Date())
};

const tableButton = document.querySelector("#table");
const table = document.querySelector("#example");

function showTable() {
    table.style.display = "block";
};

const c = () => {
    const success = (position) => {
        console.log(position);
      };
      
      const error = (error) => {
        console.log(error);
      };
    navigator.geolocation.getCurrentPosition(success, error);
};

const d = () => console.log("Stepped over my a mouse!");
const e = () => console.log("Bye bye mouse!");

const f = () => {
    document.getElementById("textdata").innerHTML = "Please fill in the form with proper data.";
};

let keydowns = 0;

const g = () => {
    keydowns += 1;
    document.getElementById("charcount").innerHTML = keydowns;
};

const h = () => {
    if (document.getElementById("textdata").value == "") {
        alert("Empty form");
    } else {
        alert("Form sent to hell :)");
    };
};


function i(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    document.getElementById("coordinates").innerHTML = x + ", " + y;
};
  