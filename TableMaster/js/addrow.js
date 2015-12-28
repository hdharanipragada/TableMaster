function fnAddRow() {
    var table = document.getElementById("resultdatagrid");
    var row = table.insertRow(4);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var inner = document.getElementById("dropdown");
    cell5.innerHTML = inner;
}

        