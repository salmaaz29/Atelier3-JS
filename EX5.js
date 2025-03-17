const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
    ];

const TTC_total = products.map(product=>product.price*(1+0.25)).reduce((acc,prix)=>acc+prix);
console.log(TTC_total); 