var products = [
    {name: "Dress to Impress", price: "$100", image: "images/suit.jpg", id:1 },
    {name: "Confidence Coaching", price: "$100", image: "images/confidence.jpg", id:2},
    {name: "Match-making", price: "$100", image: "images/matchmaking.jpg", id:3 },
    {name: "Financial Advice", price: "$100", image: "images/money.jpg", id:4},
    {name: "Networking/Mentoring", price: "$100" , image: "images/networking.jpg", id:5},
    {name: "Shaving Kit", price: "$100", image: "images/shaving.jpg", id:6},
    {name: "Give Back", price: "$0", image: "images/volunteer.jpg", id:7},
];
   
var productHtml = "";
for (i = 0; i < products.length; i++) { 
    productHtml += `<div id="${products[i].id}" class="indiv-prod">`;
    productHtml += `<img id="pics_${products[i].id}" src="${products[i].image}"/>`;
    productHtml += `<h2>${products[i].name}</h2>`;
    productHtml += `<h4>${products[i].price}</h4>`;
    productHtml += `<button class="shopping-cart">Add to Cart</button>`
    productHtml += `</div>`;
}
var productElement = document.getElementById("card");

productElement.innerHTML = productHtml;
productElement.addEventListener("click",redirect);

function redirect(event) {
    
    if (event.target.className === "shopping-cart") {
        window.location="#";

    } else if (event.target.id === "pics_1") {  
        window.location="pro-info.html";
    }      
};


