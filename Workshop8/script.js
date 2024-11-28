var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = JSON.parse(text);

function firstlast() {
    let te = "";
    for (const x in obj.employees) {
        console.log(obj.employees[x].firstName);
        te += obj.employees[x].firstName + " ";
        te += obj.employees[x].lastName + ", ";
        
    }
    document.getElementById("jsondata").innerHTML = te;
}

function a() {
    document.getElementById("jsondata").innerHTML = JSON.stringify(obj);
}

function raw() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("rawdata").innerHTML = this.responseText;
    }
    xhttp.open("GET", "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750");
    xhttp.send();
}

function parsed() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var myjson = JSON.parse(this.responseText);
        var table = document.createElement("table") 
        var tr = table.insertRow(-1); 
        
            var cur = myjson.Search[0];
            console.log(cur)
            Object.keys(cur).forEach((s) => {
                console.log(s);
                var th = document.createElement("th");
                th.innerHTML = s;
                tr.appendChild(th);
            }); 
            
            
            
            myjson.Search.forEach(function (item) {
                tr = table.insertRow(-1);
                Object.keys(item).forEach((key) => {
                    console.log(key)
                    if (key === 'Poster') {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = `<img src='${item[key]}' height="200">`
                    } else {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = item[key];
                    };

                });
            });


    
        var laatikko = document.getElementById("rawdata");
        laatikko.innerHTML = "";
        laatikko.appendChild(table);
    }
    xhttp.open("GET", "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750");
    xhttp.send();
}

function fweather() {

};

function weatherParse() {

};

function weatherPulld() {

};

function weatherInput() {

};