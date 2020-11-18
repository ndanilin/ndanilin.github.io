var date = document.getElementById("date");
var source = document.getElementById("source");
var rootForTable = document.getElementById("table-wrapper");
var list;

function exportCsv(){
    $("table").first().table2csv();
}

function resetStyle() {
    source.style.borderColor = "black";
}

function validate(){
    var err = document.createElement("div");
    err.setAttribute("class", "alert alert-danger")
    err.innerText = "Не выбран источник";
    rootForTable.appendChild(err);
}

function loadReport() {
    rootForTable.innerHTML = "";

    if (date.value === "02.02.2020" && source.value === "Источник1") {
        list = JSON.parse(data1);
    } else if (date.value === "05.12.2020" && source.value === "Источник1") {
        list = JSON.parse(data2);
    } else if (date.value === "02.02.2020" && source.value === "Источник2") {
        list = JSON.parse(data3);
    } else if (date.value === "05.12.2020" && source.value === "Источник2") {
        list = JSON.parse(data4);
    } else if (source.value === "") {
        source.style.borderColor = "red";
        validate();
        return
    } else {
        console.error("Invalid input");
        return;
    }

    var cols = [];

    for (var i = 0; i < list.length; i++) {
        for (var k in list[i]) {
            if (cols.indexOf(k) === -1) {

                // Push all keys to the array
                cols.push(k);
            }
        }
    }

    // Create a table element
    var table = document.createElement("table");
    table.setAttribute('class', 'table table-bordered');
    table.setAttribute('align', 'center');

    // Create table row tr element of a table
    var tr = table.insertRow(-1);

    for (var i = 0; i < cols.length; i++) {

        // Create the table header th element
        var theader = document.createElement("th");
        theader.innerHTML = cols[i];

        // Append columnName to the table row
        tr.appendChild(theader);
    }

    // Adding the data to the table
    for (var i = 0; i < list.length; i++) {

        // Create a new row
        trow = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var cell = trow.insertCell(-1);

            // Inserting the cell at particular place
            cell.innerHTML = list[i][cols[j]];
        }
    }

    // Add the newely created table containing json data
    rootForTable.appendChild(table);
}