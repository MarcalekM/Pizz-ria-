let osszeg = 0;
document.getElementById("ossz").innerHTML = osszeg + " Ft";

function AddNewRow(name, size, price) {
    let table = document.getElementById("MyOrder");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = size + " cm";
    cell3.innerHTML = price + " Ft";
  }

function Osszeg(price){
    osszeg += price;
    document.getElementById("ossz").innerHTML = osszeg + " Ft";
}

function prod1() {
  let name = "Magyaros";
  let size = 32;
  let price = 3000;
  AddNewRow(name, size, price);
  Osszeg(price);
}

function prod2() {
  let name;
  let size;
  let price;
  AddNewRow(name, size, price);
  Osszeg(price);
}
