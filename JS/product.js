var products = [
    {name: "Dress to Impress", price: "$100", image: "images/suit.jpg" },
    {name: "Confidence Coaching", price: "$100", image: "images/confidence.jpg"},
    {name: "Match-making", price: "$100", image: "images/matchmaking.jpg" },
    {name: "Financial Advice", price: "$100", image: "images/money.jpg"},
    {name: "Networking/Mentoring", price: "$100" , image: "images/networking.jpg"},
    {name: "Shaving Kit", price: "$100", image: "images/shaving.jpg"},
    {name: "Give Back", price: "$0", image: "images/volunteer.jpg"},
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

productHtml[0] = document.getElementById("suits").innerHTML;