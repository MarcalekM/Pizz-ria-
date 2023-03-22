function AddNewRow(name, size, price) {
    let table = document.getElementById("MyOrder");
    let x = name;
    let y = size;
    let z = price;
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = z;
  }

function Osszeg(price){
    let ar = price;
    let now = document.getElementById("ossz").value;
    document.getElementById("ossz").value = ar + now;
}