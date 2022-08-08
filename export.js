var products = [
    {
        id : 1,
        Name : "Royal Enfield",
        Model : "Classic 350",
        Quantity : 0
    },
    {
        id : 2,
        Name : "KTM",
        Model : "KTM 390",
        Quantity : 0
    }, {
        id : 3,
        Name : "Pulsar",
        Model : "Ns 200",
        Quantity : 0
    }, {
        id : 4,
        Name : "Apache",
        Model : "RTR 160",
        Quantity : 0
    }, {
        id : 5,
        Name : "Shine",
        Model : "CB 125",
        Quantity : 0
    },
]

var Add = document.querySelector(".addd");
var Remove = document.querySelector(".removee");
var Cart = document.querySelector(".kart");

Add.addEventListener('click', () =>{
    var NOP = parseInt(prompt("Enter the ID number"));
    let Matching = products.find((product) => product.id == NOP);
    Matching.Quantity++
}
)

Remove.addEventListener('click', () => {
 var NOP = parseInt(prompt("Enter the ID number"));
 products.find((product) => product.id == NOP).Quantity = 0;
}
)

Cart.addEventListener('click', () =>{
    var cart = [];
    products.filter((product) => product.Quantity > 0).forEach((element) => cart.push(element));
    console.log(cart);
        
    }
)