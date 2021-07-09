
let candyType;
let weight;
let price;
let boughtCandyPrices = [];
let spendpower =0;

function addCandy(candyType, weight)
{
    if (candyType==="sweet"){
        boughtCandyPrices.push(0.5*weight);}

    else if(candyType==="chocolate"){
        boughtCandyPrices.push(0.7*weight);}

    else if (candyType==="toffee"){
        boughtCandyPrices.push(1.1*weight);}

    else if (candyType==="chewing-gum"){
        boughtCandyPrices.push(0.03*weight);}
    else{
        console.log(candyType + " is not in the list. Check your chacolate type");
    }
}


addCandy("sweet",50);
addCandy("chocolate",150);
addCandy("toffee",20);
addCandy("chewing-gum",10);
addCandy("Cookie", 10);



let i=0;
while (i<boughtCandyPrices.length){
    spendpower += boughtCandyPrices[i];
    i++;
}
let amountToSpend = Math.floor(Math.random() * 100);

function canBuyMoreCandy(){
    if (amountToSpend >= spendpower){
        console.log("Can Buy More Candy : You can buy more!");}

    else{
        console.log("Can Buy More Candy : Enough candy for you!");
    }
}

console.log("Bought Candy Price : " + spendpower);
console.log("Amount To Spend : " + amountToSpend);
console.log (canBuyMoreCandy());