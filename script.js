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

for (let i = 0; i < sessionStorage.length; i++) {
  if (i != 0) {
    let pizza = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)))
    console.log(pizza);
    AddNewRow(pizza["name"], pizza["size"], pizza["price"])
    Osszeg(pizza["price"])
  }
}
