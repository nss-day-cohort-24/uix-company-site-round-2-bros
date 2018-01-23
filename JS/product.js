var products = [
    {name: "Dress to Impress", description: "Closet consultation with a fashion expert", price: "$100", image: "images/businessattire.jpg" },
    {name: "Professional Confidence Coaching", description: "Learn skills and tools to boost your confidence at work", price: "$100", image: "images/confidence.jpg"},
    {name: "Match-making", description: "Dating service for when you're ready to settle down and find 'the one'", price: "$100", image: "images/matchmaking.jpg" },
    {name: "Financial Advice", description: "Our team of financial experts help you invest for your future", price: "$100", image: "images/money.jpg"},
    {name: "Networking/Mentoring", description: "Meet up with other industry professionals to receive career advice and network" , price: "$100" , image: "images/networking.jpg"},
    {name: "Shaving Kit", description: "Dope shaving kit", price: "$100", image: "images/shaving.jpg"},
    {name: "Give Back", description: "Join other aspiring men give back to their community", price: "$2000", image: "images/poohsneakers.jpg"},
];
   
var productHtml = "";
for (i = 0; i < products.length; i++) { 
    productHtml += `<div>`;
    productHtml += `<img src="${products[i].image}"/>`;
    productHtml += `<h2>${products[i].name}</h2>`;
    productHtml += `<h4>${products[i].description}</h4>`;
    productHtml += `<h4>${products[i].price}</h4>`;
    productHtml += `</div>`;
}
document.getElementById("card").innerHTML = productHtml;