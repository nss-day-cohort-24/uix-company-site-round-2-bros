var products = [
    { name: "Blue Suit", price: "$100", image: "images/blue-suit.jpg" },
    { name: "Grey Suit", price: "$100", image: "images/grey-suit.jpg" },
    { name: "Black Suit", price: "$100", image: "images/black-suit.jpg" },
];

var productHtml = "";
for (i = 0; i < products.length; i++) {
    productHtml += `<div class="indiv-prod">`;
    productHtml += `<img src="${products[i].image}"/>`;
    productHtml += `<h2>${products[i].name}</h2>`;
    productHtml += `<h4>${products[i].price}</h4>`;
    productHtml += `<button class="shopping-cart">Add to Cart</button>`
    productHtml += `</div>`;
}
document.getElementById("card").innerHTML = productHtml;

var prodPageLink = product[0].images;
prodPageLink = document.getElementById("suit").innerHTML;