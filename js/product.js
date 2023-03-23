const pizzak = [
    {
        "name": "Magyaros",
        "size": 32,
        "price": 3000
    },
    {
        "name": "Magyaros 2",
        "size": 32,
        "price": 2500
    },
    {
        "name": "Magyaros 3",
        "size": 32,
        "price": 3500
    }
]

function Felvesz(params) {
    let pizza;
    switch (params) {
        case 0:
            pizza = pizzak[0]
            break;
        case 1:
            pizza = pizzak[1]
            break;
        case 2:
            pizza = pizzak[2]
            break;
        default:
            break;
    }
    sessionStorage.setItem(sessionStorage.length + 1, JSON.stringify(pizza))
    window.location.replace("http://127.0.0.1:5500/cart.html");
}