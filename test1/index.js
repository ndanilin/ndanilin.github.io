var date = document.getElementById("date");
var source = document.getElementById("source");
var list;

function resetStyle() {
    source.style.borderColor = "black";
}

function loadReport() {
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
        list = [{"Не выбран источник": ""}];
    } else {
        list = [];
        console.error("Invalid input")
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
    table.setAttribute('border', '1px');
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
    var el = document.getElementById("table-scroll");
    el.innerHTML = "";
    el.appendChild(table);
}