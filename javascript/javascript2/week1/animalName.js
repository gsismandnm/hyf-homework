// Spirit animal name generator

const p = document.querySelector("p"); // for show the name
const input = document.getElementById("inputName"); // for write the name input text
const btn = document.querySelector("button"); // make a button

// make a function  that will return the input name


btn.addEventListener("click", function clickOne(){
  const inputText = input.value;
  if (inputText !== ""){     
     const newName =   p.textContent       // For new spirit animal
      p.textContent = (`${inputText} - ${item} `) ;
} 
  else {       // if the input was empty
      p.textContent = ("Please Do Not Forget To Write Your Name")
}
});

const spiritAnimalList = [
    "Bat",
    "Buffalo",
    "Cow",
    "Spider",
    "Sheep",
    "Falcon",
    "Deer",
    "Owl",
    "Snake",
    "Woodpecker",
    "Alligator",  
];

let item = spiritAnimalList[Math.floor(Math.random() * spiritAnimalList.length)];