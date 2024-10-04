let changeHeading = () => {
    document.querySelector("h1").innerHTML = "Modified Heading!"
};

function secondButton() {
    let titles = document.querySelectorAll("h2");
    titles[1].style.font = "italic xx-large arial,serif";
    titles[1].style.color = "orange";
    titles[1].style.backgroundColor = "green";
};

function thirdButton() {
    let parags = document.querySelectorAll("p");
    let uusi = document.createElement('p');
    uusi.innerHTML = "<strong id=\"lorem\"><em>&quot;Lorem ipsum</em></strong><em> dolor sit amet, consectetuer   adipiscing elit. Sed posuere interdum sem. Quisque ligula eros   ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam   vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget   velit. &quot;</em>";
    parags[3].appendChild(uusi);
    document.querySelector("HTML").style.backgroundColor = 'black';
};

function hide() {
    document.querySelector("#me").style.display = "none";
};

function show() {
    document.querySelector("#me").style.display = "block";
};

function sup() {
    let surprises = document.querySelectorAll(".surprise");
    surprises.forEach(element => {
        element.style.fontSize = '20px'
    });
};

function pudotus () {
    let drop = document.querySelector('#mySelect').value;
    alert(drop);
    document.querySelector('img').id = drop;
    if (drop == 'Audi')  {
        document.querySelector('img').src = "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_186,y_78,w_1907,h_1907/w_392,h_392,c_fill/auto-client/aaf8de7c92a3c12881cdcf05d3c07e04/connollys_throwback_series_audi_wk1_02_2_.jpg";
    } else if (drop == 'Mercedes') {
        document.querySelector('img').src = "https://urheiluperhe.com/sites/default/files/styles/large/public/64808-1.jpg.webp?itok=bN-1YdGU";
    } else if (drop == 'Volvo') {
        document.querySelector('img').src = "https://i.pinimg.com/236x/f9/f4/46/f9f44689b3d4957245c003d66ff92c89.jpg";
    } else {
        document.querySelector('img').src = "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png";
    };
};

function mouseover() {
    document.querySelector('#' + document.querySelector('img').id).style.border = "thin dashed black";
};

function mouseout() {
    document.querySelector('#' + document.querySelector('img').id).style.border = "";
};

function changePosition() {
    document.querySelector('img').style.left = '200px';
    document.querySelector('img').style.top = '500px';
};

function doMove() {
    x = parseInt(document.querySelector('img').style.left) +  5;
    document.querySelector('img').style.left = x + 'px';
};

function fadeOut() {
    let see = document.querySelector("img").style.opacity;
    see -= 0.1;
    document.querySelector("img").style.opacity = `${see}`;
};

function remove() {
    document.querySelector("img").remove();
};

function insertRows()  {
    let name = document.createTextNode(document.querySelector("#textfield").value)
    let pos = document.createTextNode(document.querySelector("#textfield2").value)
    let sal = document.createTextNode(document.querySelector("#textfield3").value)
    let newrow = document.querySelector("#data").insertRow(-1);
    let newcell = newrow.insertCell(-1)
    let newcell2 = newrow.insertCell(-1)
    let newcell3 = newrow.insertCell(-1)
    newcell.appendChild(name)
    newcell2.appendChild(pos)
    newcell3.appendChild(sal)
}

