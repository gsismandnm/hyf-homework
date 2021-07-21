const clothsToWear = {
cold: ["pants", "slacks", "shirts", "t-shirts", "sneakers", "scarf"],
warm: ["muffler", "thicker pants", "long sleeve", "jumper", "coat", "hunter boots"],
hot: ["shorts ", "sleeveless", "birkenstock", "shades"],
}

function getTheTemperature (temperature) {
    if (temperature <-10){
        console.log ("Today is " + temperature + " degree Celsius. İt is too cold. Stay home is better to go.");} 
        
    else if (temperature >= -10 && temperature <=10) {
        console.log("Today is " + temperature + " degree Celsius. Wear like : " + clothsToWear.cold);
    } 
    
    else if (temperature >10 && temperature <=20) {
        console.log("Today is " + temperature + " degree Celsius. Wear like : " + clothsToWear.warm)
    } 
    
    else if (temperature > 20 && temperature <= 40) {
        console.log ("Today is " + temperature + " degree Celsius. Wear like : " + clothsToWear.hot);
    }

    else if (temperature >40){
        console.log ("Today is " + temperature + " degree Celsius. Wear like : " + "It is too hot. Stay home is better to go.");
    }
}

    getTheTemperature (-25)  
    getTheTemperature (5)
    getTheTemperature (15)
    getTheTemperature (25)
    getTheTemperature (45)